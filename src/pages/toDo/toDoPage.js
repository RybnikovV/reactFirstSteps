import React, { useEffect } from 'react';
import ToDoItem from './toDoItem/toDoItem';
import ToDoInput from './toDoInput/toDoInput';
import Tab from '../../components/tab/tab';
import toDoService from '../../API/toDoService';

import './toDo.css';

export default ToDoPage;

function ToDoPage() {
    const [toDoitems, setToDoItems] = React.useState([]);
    const [searchValue, setSerchValue] = React.useState('');

    useEffect(() => {
        fetchToDoItems();
    }, [])

    async function fetchToDoItems() {
        setToDoItems(await toDoService.getAll());
    };

    //Блок управление
    const deletItem = (key) => {
        setToDoItems(toDoitems.filter(item => item.id !== key));
    };

    const resolveTask = (key) => {
        const changedItemsData = toDoitems.map(item => {
            if (item.id === key) {
                item.completed = true
            }
            return item
        })

        setToDoItems(changedItemsData)
    };

    const addNewTask = (toDoItemData) => {
        setToDoItems([toDoItemData, ...toDoitems]);
    };
    //Конец блока управления
        
    const tabContent = [
        {
            title: 'add task',
            content: <ToDoInput addNewTask={addNewTask}/>,
        }, {
            title: 'search element',
            content: <input className="to-do__input" 
                        placeholder='help to find task'
                        type='text'
                        value={searchValue}
                        onChange = {(e)=>{setSerchValue(e.target.value)}}/>
        }
    ];

    const searchedToDoItems = React.useMemo(() => {
        return toDoitems.filter(item => item.title.toLowerCase().includes(searchValue))
    }, [toDoitems, searchValue]);

    const viewItems  = [...searchedToDoItems].map(item => {
        return (
            <ToDoItem
                completed={item.completed}
                title={item.title}
                id={item.id}
                key={item.id}
                deleteItem={deletItem}
                resolveTask={resolveTask}/>
        )
    });

    return (
        <div className='to-do'>
            <div className='to-do__wrapper'>
                <Tab tabsContent={tabContent} className="margin-b-2"/>
                {
                    viewItems.length
                    ? viewItems
                    : <h3>You don't have task</h3>
                }
            </div>
        </div>
    )
};