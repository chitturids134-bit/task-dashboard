import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider">MyApp</h1>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Tasks
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
