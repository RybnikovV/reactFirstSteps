import React from 'react';
import MyButton from '../../../components/button/btn';

export default ToDoInput;
 
function ToDoInput({addNewTask}) {
    const [inputValue, setInputValue] = React.useState('');

    const createNewTask = () => {
        console.log('createNEwTask call');
        if (inputValue.length !== 0) {
            addNewTask({
                id: new Date(),
                description: inputValue,
                status: 'unresolved'
            });
            setInputValue('');
        }
    }

    return (
        <div>
            <input className="to-do__input" 
                type='text' 
                placeholder="add task by interior function"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}/>
            <button className='btn btn_success' onClick={createNewTask}>add</button>
            <MyButton>add</MyButton>
        </div>
    )
}