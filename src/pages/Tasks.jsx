import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tasks List</h2>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {tasks.map(task => (
            <Link key={task.id} to={`/tasks/${task.id}`}>
              <TaskCard task={task} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tasks;