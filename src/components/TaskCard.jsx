function TaskCard({ task }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-semibold">{task.title}</h3>

      <p
        className={`text-sm mt-2 ${
          task.completed ? "text-green-600" : "text-orange-600"
        }`}
      >
        {task.completed ? "Completed ✅" : "Pending ⏳"}
      </p>
    </div>
  );
}

export default TaskCard;