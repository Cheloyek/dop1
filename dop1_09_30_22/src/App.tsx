import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

//5. Создаем типизацию
type PropsType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {
    //----------------1 способ - кнопка-------------------
    // 2. Передадим данные через useState в <ul>
    // 6. Прописываем типизацию useState<Array<PropsType>>
    const [todos, setTodos] = useState<Array<PropsType>>([])
    console.log(todos) //4. Проверяем - выводит в консоль 2 раза, тк <React.StrictMode> в index, можно убрать

    //1. при нажатии на кнопку отрисовываем данные с сервера https://jsonplaceholder.typicode.com/

    //----------------2 способ - отрисовка при загрузке сайта, хук useEffect---------------------
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])


    const onClickHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            // .then(json => console.log(json)) 3. заменили console.log на setTodos
            .then(json => setTodos(json))
    }

    // --------------- при нажатии на кнопку - очищает страницу------------------------
    const onClickHandlerClear = () => {
        setTodos([])
    }



  return (
    <div className="App">
        {/*7. отрисуем полученные данные с сервера*/}
        <button onClick={onClickHandler}>NEW POSTS</button>
        <button onClick={onClickHandlerClear}>CLEAR POSTS</button>
        <ul>
            {todos.map(el => {
                return (
                    <li>
                        <span>{el.id} - </span>
                        <span>{el.title}</span>
                        <span>{el.completed}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}

export default App;
