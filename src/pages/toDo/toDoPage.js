import React from 'react';
import toDoItemsData from '../../fakeData/toDoData';
import ToDoItem from './toDoItem/toDoItem';
import ToDoInput from './toDoInput/toDoInput';

import './toDo.css';

export default ToDoPage;

function ToDoPage() {
    const [toDoitems, setToDoItems] = React.useState(toDoItemsData);

    const deletItem = (key) => {
        setToDoItems(toDoitems.filter(item => item.id !== key))
    };

    const resolveTask = (key) => {
        const changedItemsData = toDoitems.map(item => {
            if(item.id === key){
                item.status = 'resolved'
            }
            return item
        })

        setToDoItems(changedItemsData)
    };

    const addNewTask = (toDoItemData) => {
        setToDoItems([...toDoitems, toDoItemData]);
    };

    const viewItems = toDoitems.map(item => {
        return (
            <ToDoItem
                status={item.status}
                description={item.description}
                id={item.id}
                key={item.id}
                deleteItem={deletItem}
                resolveTask={resolveTask}/>
        )
    });

    return (
        <div className='to-do'>
            <div className='to-do__wrapper'>
                {viewItems}
                <ToDoInput addNewTask={addNewTask}/>
            </div>
        </div>
    )
}

