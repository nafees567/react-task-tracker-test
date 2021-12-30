import { useState } from "react"
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function App() {
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctor\'s Appointment',
          date: 'Dec 51 at 4:00 pm',
          reminder: false,
      },
      {
          id: 2,
          text: 'Room Cleaning',
          date: 'Dec 61 at 7:00 am',
          reminder: false,
      },
      {
          id: 3,
          text: 'Completing React Trask Tracker Application',
          date: 'Dec 20 at 12:00 pm',
          reminder: true,
      },
  ])

  // Delete Tasks 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log("Execution entering in toggleReminder at Task ", id);
    setTasks(tasks.map((mapTask) => mapTask.id === id ? {...mapTask, reminder: !mapTask.reminder} : mapTask ))
  }

  // Add Task when "Add Task" form button is pressed
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No task to show'}
    </div>
  );
}

export default App;
