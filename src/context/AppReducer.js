import { act } from "react-dom/test-utils"

export default function AppReducer(state, action){
    switch(action.type){
            case 'ADD_COLUMN':
            return{
                ...state,
                taskColumn: [
                    ...state.taskColumn,
                    action.payload,
                    ...state.taskColumn.tasks=[]
                   
                ]
            }
            case 'ADD_TODOS': 
            return{
                ...state,
                taskColumn: [
                    ...state.taskColumn.map(task =>{
                        if(task.id === action.payload.taskId) {
                          return {
                              ...task,
                              ...task.tasks ? {tasks: [...task.tasks, action.payload]} : {tasks: [action.payload]}
                          }
                            
                        }
                        else {
                            return task
                        }
                    }),
                   
                ]   
            }

            case 'DELETE_COLUMN':
                return{
                    ...state,
                    taskColumn: [
                        ...state.taskColumn.filter(column => column.id!==action.payload)
                    ]
                }
            case 'UPDATE_TITLE':
                return{
                    ...state,
                    taskColumn: [
                        ...state.taskColumn.map(task =>{
                            if(task.id === action.payload.id) {
                                task.title = action.payload.title
                                return task
                                
                            }
                            else {
                                return task
                            }
                        }),
                       
                    ]
                    
                }
                case 'UPDATE_STATE':
                    return{
                        ...state,
                        taskColumn: [
                            ...state.taskColumn.map(task =>{
                                if(task.id === action.payload.id) {
                                  return {
                                      ...task,
                                      ...task.tasks[action.payload]
                                  }
                                    
                                }
                                else {
                                    return task
                                }
                            }),
                           
                        ]   
                    }
    }
}