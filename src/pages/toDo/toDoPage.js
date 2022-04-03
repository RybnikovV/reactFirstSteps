import React from 'react';
import toDoItemsData from '../../fakeData/toDoData';
import ToDoItem from './toDoItem/toDoItem';
import ToDoInput from './toDoInput/toDoInput';
import Tab from '../../components/tab/tab';

import './toDo.css';

export default ToDoPage;

function ToDoPage() {
    const [toDoitems, setToDoItems] = React.useState(toDoItemsData);
    const [searchValue, setSerchValue] = React.useState('');

    //Блок управление
    const deletItem = (key) => {
        setToDoItems(toDoitems.filter(item => item.id !== key))
    };
    const resolveTask = (key) => {
        const changedItemsData = toDoitems.map(item => {
            if (item.id === key) {
                item.status = 'resolved'
            }
            return item
        })

        setToDoItems(changedItemsData)
    };
    const addNewTask = (toDoItemData) => {
        setToDoItems([...toDoitems, toDoItemData]);
    };
    //Конец блока управления

    const searchedToDoItems = React.useMemo(() => {
        return toDoitems.filter(item => item.description.includes(searchValue))
    }, [toDoitems, searchValue])

    const viewItems  = [...searchedToDoItems].sort(item => item.status === 'unresolved' ? -1 : 1)
        .map(item => {
            console.log('lel')
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

    const tabContent = [
        {
            title: 'add task',
            content: <ToDoInput addNewTask={addNewTask}/>
        }, {
            title: 'search element',
            content: <input  className="to-do__input" 
                        placeholder='help to find task'
                        type='text'
                        value={searchValue}
                        onChange = {(e)=>{setSerchValue(e.target.value)}}/>
        }
    ];

    return (
        <div className='to-do'>
            <div className='to-do__wrapper'>
                <Tab tabsContent={tabContent}/>
                {
                    viewItems.length
                    ? viewItems
                    : <h3>You don't have task</h3>
                }
            </div>
        </div>
    )
}