import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import "./index.css"
import Add from "./components/Add"

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        txt: 'Laundry',
        date: "12/05/2021",
        reminder: true
    },
    {
        id: 2,
        txt: 'Clean room',
        date: "01/05/2021",
        reminder: false 
    },
    {
        id: 3,
        txt: 'Garbage',
        date: "10/15/2021",
        reminder: true
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((tasks) => tasks.id === id ? { ...tasks, reminder: !tasks.reminder } : tasks))
  } 

  return (
    <div>
      <Header />
      <Add onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}/> : 'No tasks, Add some'}
    </div>
  );
}

export default App;
