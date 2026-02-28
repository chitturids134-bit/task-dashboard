import { useState, useEffect } from 'react'

export default function Home() {
  const [advice, setAdvice] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchAdvice()
  }, [])

  const fetchAdvice = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      setAdvice(data.slip.advice)
    } catch (err) {
      setError('Failed to fetch advice. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Welcome Home!
          </h1>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-white text-center my-8">
            <h2 className="text-2xl font-semibold mb-6">Daily Advice</h2>

            {loading && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                <span className="ml-4 text-lg">Loading advice...</span>
              </div>
            )}

            {error && (
              <div className="text-red-200 bg-red-500 bg-opacity-20 p-4 rounded-lg">
                {error}
              </div>
            )}

            {advice && !loading && (
              <div className="space-y-6">
                <p className="text-xl italic leading-relaxed">"{advice}"</p>
                <button
                  onClick={fetchAdvice}
                  className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-200"
                >
                  Get New Advice
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              Check out the <span className="font-semibold">Tasks</span> page to view and manage your tasks!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
