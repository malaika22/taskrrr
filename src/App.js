import './App.css';
import AddColumn from './components/AddColumn';
import Header from './components/Header'
import TaskColumnList from './components/TaskColumnList';
import {GlobalContext, GlobalProvider} from './context/GlobalState'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {useContext} from 'react'

const App = () => {

  const {taskColumn} =useContext(GlobalContext)
  let {dragStateUpdate} = useContext(GlobalContext)
  const handleOnDragEnd = result => {
    
    const {destination, source} = result;
     if(!destination){
      return;
    }
     if(destination.droppableId === source.droppableId && 
       destination.index ===source.index){
        return;
    }

    const column = Object.assign([], taskColumn.filter(task => destination.droppableId == task.id ));
    const task = column[0].tasks
    const droppedTask = task[source.index];

    task.splice(source.index, 1);
    task.splice(destination.index, 0, droppedTask);
    dragStateUpdate(task)
  }


  return (
    <div className="App">
      
      <Header />
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={'listDroppable'}  >
              {(provided) => (
                  <div 
                  {...provided.draggableProps} 
                  ref={provided.innerRef}>
                  <TaskColumnList />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        <AddColumn/>
        
        
     
    
      
    </div>
  );
}

export default App;
