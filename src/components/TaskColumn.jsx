import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Todos from './Todos';
import {Card,  CardBody, CardText, CardTitle, CardHeader, Input, Button} from 'reactstrap'
import { Draggable, Droppable } from 'react-beautiful-dnd';



export default function TaskColumn({task, index}) {
     const {deleteColumn}= useContext(GlobalContext)
     const [showInput,setInput]= useState(true);
     const [changedTitle, changeTitle] =useState(task.title)
     const {updateTitle} = useContext(GlobalContext)
    const titleUpdate = () =>{
        const updatedInfo ={
            id: task.id,
            title: changedTitle
        }
        setInput(!showInput);
        updateTitle(updatedInfo);
    }
    return(
        <Droppable droppableId={task.id.toString()} type='task' key={task.id}>
        {provided => (
            <li key={task.id}
            ref={provided.innerRef}
            {...provided.droppableProps}>
                <Card className='taskCard'>
                        <CardHeader>
                        <span><i className="fas fa-ellipsis-v"></i></span><h2 className='taskColumnHeader'>{ showInput ? task.title : <Input className='editInputField' value={changedTitle} onChange={e => changeTitle(e.target.value)} />  } </h2>  <Button   className='columnButton deleteButton' onClick={()=>deleteColumn(task.id)}><i className="fas fa-trash"></i></Button> <Button onClick={titleUpdate} className='columnButton editButton'><i className="far fa-edit"></i></Button>
                        </CardHeader>
                        <CardBody className='taskColumnBody'>
                            {task.tasks ? 
                            <ul className='taskList'>
                            {task.tasks.map((todos, index)=> {
                                if(todos) {
                                    return(
                                        <Draggable draggableId={(todos.title + index).toString()} index={index} type='task' key={index}>
                                            {(provided) => (
                                                <li 
                                                key={todos.id}
                                                {...provided.draggableProps} 
                                                ref={provided.innerRef}
                                                >
                                                        
                                                <div className='taskColumnDiv' >
                                                    <div  {...provided.dragHandleProps}><i className="fas fa-ellipsis-v"></i></div>
                                                    <div className='taskBody'>
                                                        <CardTitle><p> {todos.title}</p> </CardTitle> 
                                                        <CardText> {todos.task}</CardText> 
                                                    </div>
                                                    
                                                </div>
                                                    
                                            
                                                </li> 
                                                
                                            
                                            )}
                                            
                                        </Draggable>
                                        
                                        ) 
                                    
                                }
                                else {return <span></span>}
                                
                                    
                                }
                                
                                )
                            }
                    {provided.placeholder}
                            </ul>
                            : <span className="noTask">no tasks here</span> }
                        </CardBody>
                    
                
                        <Todos task={task}/>
                </Card>
                
                
            
            
            {/* {provided.placeholder} */}
            </li>
           )}
                            
           </Droppable>
       
            
            
       
    )
}