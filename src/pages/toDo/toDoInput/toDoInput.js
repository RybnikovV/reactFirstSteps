import { createStore } from 'redux';
import { connect } from 'react-redux';
import { ADD_NEW_TASK } from '../redux/types';

export default ToDoInput;

function ToDoInput() {
    const initialState = {
        toDoInputText: ''
    };

    const actionAddNewTask = {
        type: ADD_NEW_TASK,
        payload: null
    }

    const rootReducer = (state = initialState, action) => {
        return state;
    };

    const store = createStore(rootReducer);

    console.log(store.getState());

    return (
        <div>
            <input className="to-do__input" type='text' placeholder="add task.."></input>
            <button className='btn btn_success'>add</button>
        </div>
    )
}