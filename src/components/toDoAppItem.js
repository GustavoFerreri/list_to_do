import { useState } from 'react';
export default function ToDoItem ({item}) {
    const [isEdit, setIsEdit] = useState(false);
    const [newValue, setNewValue] = useState(item.title);
    const Update =() => {
        const handleSubmit = (e) => e.preventDefault();
        const handleChange = (e) => {
            const value = e.target.value;
            setNewValue(value)
        }
        <form className="toDoContainer_body_item-form" onClick={ handleSubmit }>
            <input 
                type="text" 
                className="toDoContainer_body_item-form-input"
                onChange={ handleChange }
                value ={newValue}
            />
            <button>Update</button>
        </form>
    }
    const Element = () => 
        <div className="toDoContainer_body_item-element">
            {item.title}
            <button onClick= {() => setIsEdit(true)}>Edit</button>
            <button>Delete</button>
        </div>

    return (
        <div className="toDoContainer_body_item">
            {isEdit ? <Update/> : <Element />}
        </div>
    )
}