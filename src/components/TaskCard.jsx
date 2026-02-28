export default function TaskCard({ task, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer border-l-4 border-blue-500"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {task.title}
          </h3>
          <p className="text-gray-600 text-sm">
            ID: {task.id} | User: {task.userId}
          </p>
        </div>
        <div className="ml-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              task.completed
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {task.completed ? '✓ Completed' : 'Pending'}
          </span>
        </div>
      </div>
    </div>
  )
}
