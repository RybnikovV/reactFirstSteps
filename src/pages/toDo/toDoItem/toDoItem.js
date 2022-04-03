import React from 'react';

export default ToDoItem;

function ToDoItem(props) {
    if (props.status === 'resolved') {
        return (
            <div className='to-do__item to-do__item_done' key={props.id}>
                <div className='to-do__item-text'>
                    {props.description}
                </div>
                <div className='to-do__item-actions'>
                    <div className='to-do__item-finished to-do__item-finished_disable'></div>
                    <div className='to-do__item-delet' onClick={() => props.deleteItem(props.id)}></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='to-do__item'>
                <div className='to-do__item-text'>
                    {props.description}
                </div>
                <div className='to-do__item-actions'>
                    <div className='to-do__item-finished' onClick={() => props.resolveTask(props.id)}></div>
                    <div className='to-do__item-delet' onClick={() => props.deleteItem(props.id)}></div>
                </div>
            </div>
        )
    }
}