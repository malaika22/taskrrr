import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import TaskColumn from './TaskColumn'


const TaskColumnList = () =>{
    const {taskColumn} =useContext(GlobalContext);
    return(
            <ul className='row taskColumnList'>
                {taskColumn.map((task,index) => {
                    return(
                            <TaskColumn index={index} 
                            task={task} 
                            key={task.id}
                             />
                        )}
                    )
                }     
            </ul>
            
        
    )
}

export default TaskColumnList