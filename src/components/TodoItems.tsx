import { useState } from "react";

interface TodoItem {
    id: number;
    task: string;
    isDone: boolean;
}

const TodoBox: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem>([]);
    const [newTask, setNewTask] = useState<string>("");

    const addNewTodo = () => {
        if (newTask.trim() === "") return;
        
        const newTodo: TodoItem = {
            id: todos.length + 1,
            task: newTask,
            isDone: false
        };
        
        setTodos([...todos, newTodo]);
        setNewTask("");
    };

    return (
        <div>
            <input 
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter new task"
            />
            <button onClick={addNewTodo}>Add Todo</button>
            
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoBox;