import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../entities/todoSingleEl';

export interface ITodoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        name: 'Pierwszy',
        description: 'Pierwszy decription'
    },
    {
        name: 'Drugi',
        description: 'Drugi decription'  
    }]
});

export default (state = defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem]
            };
        }
        default: {
            return state;
        }
    }
};