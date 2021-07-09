import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map ((tasks) => (
                <Task onToggle={onToggle} onDelete={onDelete} key={tasks.id} tasks={tasks} />
            ))}
        </>
    )
}

export default Tasks