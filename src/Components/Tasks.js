import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {/* setTasks([...tasks, {
                id: 4,
                text: 'Start Working on FYP',
                date: 'Date after tomorrow at 7 am'
                reminder: false,
            }]) */}
            {tasks.map((task) => (
                <Task key={task.id} taskID={task.id} taskText={task.text} taskDate ={task.date} taskReminder={task.reminder} onDelete={onDelete} onToggle={onToggle}></Task>
            ))}
        </>
    )
}

export default Tasks