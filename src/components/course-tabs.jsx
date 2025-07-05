"use client"

import { useState } from "react"
import { LayoutGrid, BookOpen, User, Star, ChevronDown } from "lucide-react"

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "curriculum", label: "Curriculum", icon: BookOpen },
  { id: "instructor", label: "Instructor", icon: User },
  { id: "review", label: "Review", icon: Star },
]

export function CourseTabs() {
  const [activeTab, setActiveTab] = useState("curriculum")

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-8 border-b">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 pb-4 px-1 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      {activeTab === "curriculum" && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Course Curriculum</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="font-medium text-gray-900">Introduction to ChatGPT Development</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm">0 Lesson - 0m</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="font-medium text-gray-900">Setting up the Development Environment</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm">0 Lesson - 0m</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
