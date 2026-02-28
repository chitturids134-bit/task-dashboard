import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(data => {
        setTask(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching task:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading task details...</p>;
  }

  if (!task) {
    return <p>Task not found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task Detail</h2>

      <p><strong>ID:</strong> {task.id}</p>
      <p><strong>Title:</strong> {task.title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {task.completed ? "Completed ✅" : "Pending ⏳"}
      </p>

      <Link to="/tasks" className="text-blue-600 underline mt-4 inline-block">
        ← Back to Tasks
      </Link>
    </div>
  );
}

export default TaskDetail;