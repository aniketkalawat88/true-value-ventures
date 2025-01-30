import React from 'react'

export default function Topbar() {
  return (
    <div className="flex items-center justify-between h-16 bg-primary-main ">
      <div className="flex items-center px-4">
      </div>
      <div className="flex items-center pr-4">
        <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeWidth={2}
              d="M12 19l-7-7 7-7m5 14l7-7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
