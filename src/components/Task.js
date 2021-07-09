import { FaTrash } from 'react-icons/fa'

const Task = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className={`task ${tasks.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(tasks.id)}>
            <input type="checkbox" />
            <label className="taskName">{tasks.txt}</label>
            <FaTrash onClick={() => onDelete(tasks.id)} style={ { cursor: "pointer" }}/>
            <p>{tasks.date}</p>
        </div>
    )
}

export default Task 