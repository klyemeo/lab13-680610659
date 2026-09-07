import TaskCard from "../components/TaskCard";
import TodoModal from "../components/Modal";
import { type TaskCardProps } from "../libs/Todolist";
import {  useEffect, useState } from "react";
const STORAGE_KEY = "lecture13.tasks";

function loadTasks(): TaskCardProps[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : defaultTasks;
  } catch {
    return defaultTasks; // เผื่อข้อมูลใน localStorage เสีย
  }
}


const defaultTasks: TaskCardProps[] = [];

function App() {

  const [tasks, setTasks] = useState<TaskCardProps[]>(loadTasks);

   useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // เพิ่ม: สร้าง "array ใหม่" จาก array เดิม + ตัวใหม่
  const handleAdd = (newTask: TaskCardProps) => setTasks([...tasks, newTask]);

  // ลบ: filter คืน array ใหม่ ที่เอาตัว id ตรงกันออก
  const deleteTask = (taskId: string) =>
    setTasks(tasks.filter((t) => t.id !== taskId));

  // toggle: map คืน array ใหม่ — ตัวที่ id ตรง สร้าง object ใหม่ที่สลับ isDone, ตัวอื่นคงเดิม
  const toggleDoneTask = (taskId: string) =>
    setTasks(
      tasks.map((t) => (t.id === taskId ? { ...t, isDone: !t.isDone } : t)),
    );


  return (
    <div className="col-12 m-2 p-0">
      <div className="container text-center">
        <h2>Todo List</h2>
        <span className="badge rounded bg-secondary px-3 py-2 fs-6 fw-normal me-3 mb-3">
          All : {(tasks.length)}</span> 
          <span className="badge rounded bg-success px-3 py-2 fs-6 fw-normal mb-3"> 
            Done : {tasks.filter((t) => (t.isDone === true)).length}
          </span>

        <div>
          <button
            type="button"
            className="btn btn-primary my-3"
            data-bs-toggle="modal"
            data-bs-target="#todoModal"
          >
            Add
          </button>
        </div>

        <TodoModal onAdd={handleAdd} />
        <>
          {tasks.map((task) => (
            <TaskCard
              id={task.id}
              title={task.title}
              description={task.description}
              deleteTaskFunc={deleteTask}
              toggleDoneTaskFunc={toggleDoneTask}
              isDone={task.isDone}
              key={task.id}
            />
          ))}
        </>
      </div>
    </div>
  );
}

export default App;
