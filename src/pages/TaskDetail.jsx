import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function TaskDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTaskDetail()
  }, [id])

  const fetchTaskDetail = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      )
      if (!response.ok) {
        throw new Error('Task not found')
      }
      const data = await response.json()
      setTask(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch task details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/tasks')}
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8 transition duration-200"
        >
          <span className="mr-2">←</span> Back to Tasks
        </button>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-lg text-gray-700">Loading task...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
            {error}
          </div>
        )}

        {task && !loading && (
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {task.title}
              </h1>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-gray-600">Task ID: {task.id}</span>
                <span className="text-gray-600">User ID: {task.userId}</span>
                <span
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    task.completed
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {task.completed ? '✓ Completed' : 'Pending'}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Task Details
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Title</p>
                  <p className="text-gray-900 text-lg mt-1">{task.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Status</p>
                  <p className="text-gray-900 text-lg mt-1">
                    {task.completed ? 'Completed ✓' : 'Not Completed'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">
                    Associated User
                  </p>
                  <p className="text-gray-900 text-lg mt-1">User #{task.userId}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate('/tasks')}
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Back to All Tasks
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
