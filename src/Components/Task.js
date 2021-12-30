import {FaTimes} from 'react-icons/fa'

const Task = ({taskID, taskText, taskDate, taskReminder, onDelete, onToggle}) => {
    return (
        <div className={`task ${taskReminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(taskID)} >
            <h3>{taskText} <FaTimes style={{ color: "red", cursor: "pointer", }} onClick={() => onDelete(taskID)}/></h3>
            <p>{taskDate}</p>
        </div>
    )
}

export default Task