import {useState} from 'react';
import ToDoItem from './toDoAppItem';

export default function TodoApp () {
    const [title, setTitle] = useState('Hola');
    const [toDo, setToDo] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newToDO = {
            id: crypto.randomUUID(),
            title: title,
            complete: false
        };
        const auxArray = [...toDo];
        auxArray.unshift(newToDO);
        setToDo(auxArray);
    }
    return <div className="toDoContainer">
        <form className="toDoContainer_form" onSubmit={handleSubmit}>
            <input onChange={ handleChange } className="toDoContainer_form-input" value={title}/>
            <input onClick={ handleSubmit } type="submit" value="Crete To Do" className="toDoContainer_form-btnCreate"/>
        </form>
        <div className="toDoContainer_body">
            {
                toDo.map(item => <ToDoItem key={item.id} item={item}/>)
            }
        </div>
    </div>
}