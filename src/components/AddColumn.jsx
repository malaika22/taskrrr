import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Button} from 'reactstrap'


const AddColumn= () =>{
    const [taskHeading, setTaskHeading] = useState('');
    const [isModalOpen, modalToggle] =useState(false);
    const {addTaskColumn} = useContext(GlobalContext);

    const toggle = () => modalToggle(!isModalOpen)
    const onSubmit= e =>{
        e.preventDefault();

        const newColumn= {
            id: Math.floor(Math.random() * 100000000),
            title: taskHeading
        }

       addTaskColumn(newColumn)

    }

    return(
        <div>
            <Button  onClick={toggle} color='success'  className='addColumnButton'><i className="fas fa-plus"></i> Add Column</Button>
               <Modal isOpen={isModalOpen} toggle= {toggle} >
                <ModalHeader toggle={toggle}>Add New Column</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Input type='text' autoComplete='off' placeholder='Task' name='taskTitle' onChange={e=> setTaskHeading(e.target.value)} value={taskHeading} />
                        </FormGroup>
                  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repellendus.</p>
                    <Button className='addTaskButtons' type='submit' color='primary' value='Add Column' onClick={toggle} mr={10}> Add Column</Button>
                    <Button type='button' color='danger' onClick={toggle} >Close</Button>
                    </Form>
                </ModalBody>
           
            </Modal>
        </div>
         
           
       
    )
}

export default AddColumn;

