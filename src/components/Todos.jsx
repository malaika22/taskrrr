import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Button} from 'reactstrap'


export default function Todos({task}) {
    const [todo, setTodo] =useState('');
    const [todoTitle,setTodoTitle] =useState('');
    const [isModalOpen, modalToggle] =useState(false);
    const {addTodos} = useContext(GlobalContext);

    const toggle = () => modalToggle(!isModalOpen)

    const onTodoSubmit= e =>{
        e.preventDefault();

        const todos= {
            taskId: task.id,
            id: Math.floor(Math.random() * 100000000),
            title: todoTitle,
            task: todo
        }
        

        addTodos(todos)
        console.log(task.id)
    }
   

    return(
        <div>
              <Button  className="taskButton" onClick={toggle} color='success' ><i className="fas fa-plus"></i> Task</Button>
              <Modal isOpen={isModalOpen} toggle={toggle}>
              <ModalHeader toggle={toggle}>Add New Task</ModalHeader>
              <ModalBody>
                <Form onSubmit={onTodoSubmit}> 
                    <FormGroup>
                        <Input autoComplete='off' placeholder='Text Title' type='text' value={todoTitle} name='todoTitle' onChange={e=>{setTodoTitle(e.target.value)}} />
                    </FormGroup>

                    <FormGroup>
                        <Input autoComplete='off' placeholder='Text Description' type='textarea' value={todo} name='todo' onChange={e=>{setTodo(e.target.value)}} />
                    </FormGroup>
                            <Button type='submit' value='submit' className="addTaskButtons" onClick={toggle} >Add Task</Button>
                            <Button type='button' onClick={toggle} color='danger' >Close</Button>
                            
                </Form>
              </ModalBody>
              
              </Modal>
           
        </div>
        
    )

}