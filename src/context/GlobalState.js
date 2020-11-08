import React, {createContext,useReducer} from 'react'; 
import AppReducer from './AppReducer'


const initialState = {
    taskColumn: [{
        id: 1, 
        title: 'Todos' , 
        tasks: [{
            id: 3,
            title: 'Task 1',
            task: 'Watch movies dsdaaaaaaaaaaaaaaaaaaaaaaasaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssall day'
            },
            {
                id:5,
                title:'Task',
                task:'Watch harry ppotter'
            }
    ],
    },
    {
        id: 2,
        title: 'Second Todos',
        tasks: [{
            id: 4,
            title: 'Task 2',
            task: 'Watch another movie all day'
        }]
    }
   
]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] =useReducer(AppReducer, initialState)
    
    
    function addTaskColumn(columnInfo){
        dispatch({
            type: 'ADD_COLUMN',
            payload: columnInfo
        })
    }

    function addTodos(todos){
        dispatch({
            type: 'ADD_TODOS',
            payload: todos
        })
    }

    function deleteColumn(id){
        dispatch({
            type: 'DELETE_COLUMN',
            payload: id
        })
    }

    function updateTitle(updatedInfo){
        dispatch({
            type: 'UPDATE_TITLE',
            payload: updatedInfo
        })
    }

    function dragStateUpdate(afterDrag){
        dispatch({
            type: 'UPDATE_STATE',
            payload: afterDrag
        })
    }

    return(
        <GlobalContext.Provider value={{
            taskColumn: state.taskColumn,
            addTaskColumn: addTaskColumn,
            addTodos: addTodos,
            deleteColumn: deleteColumn,
            updateTitle: updateTitle,
            dragStateUpdate: dragStateUpdate
        }} >
            {children}
        </GlobalContext.Provider>
    );
}