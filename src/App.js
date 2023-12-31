import { useState } from "react";

import Header from "./components/Header"
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";


const App = () => {
     const [showAddTask, setShowAddTask] = useState(false)
     const [tasks,setTasks] = useState([
      {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder : true
    },
    {
        id:2,
        text: 'Engineers Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder : true
        
    },
    {
        id:3,
        text: 'Farmers Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder : false
    },
     ])

     //Add Tasks

     const addTask = (task) => {
      const id =Math.floor(Math.random() * 1000)+1  
      const newTask ={id, ...task}
      setTasks([...tasks, newTask])  
   }

    //deleting the task

    const deleteTask =(id) => (
      setTasks(tasks.filter((task) => task.id!==id))
    )
    
     //Toggle Reminder 

     const toggleReminder =(id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
     }

  return (
    <div className="container">
      <Header onAdd ={() => setShowAddTask(!showAddTask) } 
      showAdd={showAddTask}/>


    {showAddTask && <AddTasks onAdd= {addTask}/>}

      {tasks.length > 0 ? (<Tasks tasks= {tasks} 
       onDelete ={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to Show')
}
     </div>
  );
}

export default App;
