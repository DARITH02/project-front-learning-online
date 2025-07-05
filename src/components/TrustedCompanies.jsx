"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const companies = [
  { id: 1, name: "martino", color: "text-gray-800" },
  { id: 2, name: "SquareStone", color: "text-blue-600" },
  { id: 3, name: "waverio", color: "text-pink-500" },
  { id: 4, name: "fireli", color: "text-orange-500" },
  { id: 5, name: "VERTEX", color: "text-yellow-500" },
  { id: 6, name: "TechCorp", color: "text-green-600" },
  { id: 7, name: "DataFlow", color: "text-purple-600" },
]

export default function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Math.max(1, companies.length - 4))
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + Math.max(1, companies.length - 4)) % Math.max(1, companies.length - 4))
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % Math.max(1, companies.length - 4))
  }

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted by Thousands
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Carousel */}
          <div className="mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
            >
              {companies.map(company => (
                <div
                  key={company.id}
                  className="flex-shrink-0 w-1/5 px-4 flex items-center justify-center"
                >
                  <div className="flex items-center justify-center h-16 w-full">
                    <div className={`text-xl font-bold ${company.color} flex items-center gap-2`}>
                      {company.name === "martino" && (
                        <>
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                          <span>martino</span>
                        </>
                      )}
                      {company.name === "SquareStone" && (
                        <>
                          <div className="w-6 h-6 bg-blue-600 rounded-sm rotate-45"></div>
                          <span>SquareStone</span>
                        </>
                      )}
                      {company.name === "waverio" && (
                        <>
                          <div className="w-6 h-6 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full"></div>
                          <span>waverio</span>
                        </>
                      )}
                      {company.name === "fireli" && (
                        <>
                          <div className="w-6 h-6 bg-gradient-to-t from-orange-500 to-red-500 rounded-full"></div>
                          <span>fireli</span>
                        </>
                      )}
                      {company.name === "VERTEX" && (
                        <>
                          <div className="w-6 h-6 bg-yellow-500 rotate-45"></div>
                          <span>VERTEX</span>
                        </>
                      )}
                      {!["martino", "SquareStone", "waverio", "fireli", "VERTEX"].includes(company.name) && (
                        <span>{company.name}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
