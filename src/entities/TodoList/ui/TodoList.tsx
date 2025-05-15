import {type ChangeEvent, type FC, useCallback, useMemo, useState} from "react";
import s from './TodoList.module.scss'
import {v4} from "uuid";

interface ITask {
    id: string;
    text: string;
    completed: boolean
}

type  IFilterValue = 'all' | 'active' | 'completed'

export const TodoList: FC = () => {
    const [tasks, setTasks] = useState<ITask[]>([
        {id:'1', text: 'Выучить HTML', completed: true},
        {id: '2', text: 'Выучить JS', completed: false},
        {id: '3', text: 'Выучить css', completed: true},
    ])
    const [newTaskText, setNewTaskText] = useState<string>('')
    const [filter, setFilter] = useState<IFilterValue>('all')
    const [error, setError] = useState<string | null>(null);

    const addTask = useCallback(() => {
        if (!newTaskText.trim()) {
            setError('Введите задачу!');
            return;
        }
        setTasks((prev) => [
            ...prev,
            {id: v4(), text: newTaskText.trim(), completed: false},
        ]);
        setNewTaskText('');
        setError(null);
    }, [newTaskText]);

    const toggleTaskCompleted = useCallback((id: string) => {
        setTasks(prev => {
            return prev.map(task => task.id === id ? {...task, completed: !task.completed} : task)
        })
    }, [])

    const deleteTask = useCallback((id: string) => {
        setTasks(prev=> prev.filter(task=>task.id !== id))
    }, []);

    const handleSelectFilter = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value as IFilterValue);
    }, []);

    const filteredTasks = useMemo(() => {
        switch (filter) {
            case 'all':
                return tasks;
            case 'completed':
                return tasks.filter((t) => t.completed);
            case 'active':
                return tasks.filter((t) => !t.completed);
            default:
                return tasks;
        }
    }, [filter, tasks]);

    return <div className={s.container}>
        <div className={s.taskAddWrapper}>
            <label htmlFor="task-input" className={s.label}>
                Новая задача
            </label>
            <input
                id="task-input"
                className={s.input}
                type="text"
                placeholder="Что хотите сделать?"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                aria-invalid={!!error}
            />
            <button className={s.button} onClick={addTask}>
                Добавить
            </button>
            {error && <p className={s.error}>{error}</p>}
        </div>
        <select
            className={s.filter}
            onChange={handleSelectFilter}
            value={filter}
            aria-label="Фильтр задач"
        >
            <option value="all">Все</option>
            <option value="active">Активные</option>
            <option value="completed">Выполненные</option>
        </select>
        <ul className={s.taskList}>
            {filteredTasks.length ? filteredTasks.map((task) => (
                <li key={task.id} className={s.task}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompleted(task.id)}
                        className={s.checkbox}
                        id={`task-${task.id}`}
                        aria-checked={task.completed}
                    />
                    <label
                        htmlFor={`task-${task.id}`}
                        className={`${s.text} ${task.completed ? s.completed : ''}`}
                    >
                        {task.text}
                    </label>
                    <button
                        className={s.deleteButton}
                        onClick={() => deleteTask(task.id)}
                        aria-label={`Удалить задачу ${task.text}`}
                    >
                        ✕
                    </button>
                </li>
            )) : <p>Задач нет</p>}
        </ul>
    </div>
}