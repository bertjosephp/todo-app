import { useTasksContext } from '../hooks/useTasksContext'

const TaskDetails = ({ task }) => {
    const { dispatch } = useTasksContext();

    const handleClick = async() => {
        const response = await fetch('/api/tasks/' + task._id, {
            method: 'DELETE'
        })
        const json = await response.json();

        if (response.ok) {
            dispatch({type:'DELETE_TASK', payload: json});
        }
    }
    return (
        <div className="task-details">
            <h4>{task.title}</h4>
            <p className="task-description">{task.description}</p>
            <p className="task-dueDate">Deadline: {task.dueDate}</p>
            <span onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
            
        </div>
    )
}

export default TaskDetails;