import React from 'react';
import toDoItemsData from '../fakeData/toDoData';
import ToDoItem from './toDoItem/toDoItem';
import ToDoInput from './toDoInput/toDoInput';

import './toDo.css';

export default ToDoPage;

function ToDoPage() {
    const [items, setItems] = React.useState(toDoItemsData);

    const deletItem = (key) => {
        setItems([...items.filter(item => item.id !== key)])
    };

    const finishTask = (key) => {
        const changedItemsData = items.map(item => {
            if(item.id === key){
                item.status = 'resolved'
            }
            return item
        })

        setItems(changedItemsData)
    };

    const viewItems = items.map(item => {
        return (
            <ToDoItem
                status={item.status}
                description={item.description}
                id={item.id}
                key={item.id}
                deleteItem={deletItem}
                finishTask={finishTask}/>
        )
    });
    return (
        <div className='to-do'>
            <div className='to-do__wrapper'>
                {viewItems}
                <ToDoInput />
            </div>
        </div>
    )
}

