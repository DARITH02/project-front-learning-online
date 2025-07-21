"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import Cart from "../components/Cart";
import LoadingPage from "../components/LoadingPage";

import AOS from "aos";
import "aos/dist/aos.css";

import TrustedCompanies from "../components/TrustedCompanies";
import P1 from "../../public/image-front/image2.JPG";
import P2 from "../../public/image-front/image2.JPG";
import P3 from "../../public/image-front/image3.JPG";
import P4 from "../../public/image-front/image4.JPG";
import api from "../api/axios";


const slides = [
  {
    id: 1,
    title: "Make yourself one",
    subtitle: "Comfort & Professional",
    description:
      "comprehensive educational experiences that develop and enhance skill sets that can be applied to diverse job profiles.",
    buttonText: "Find your desired Course",
    backgroundImage: P1,
  },
  {
    id: 2,
    title: "Unlock your potential",
    subtitle: "Learn & Grow",
    description:
      "Join thousands of students who have transformed their careers through our expert-led courses and practical learning approach.",
    buttonText: "Explore Courses",
    backgroundImage: P2,
  },
  {
    id: 3,
    title: "Start your journey",
    subtitle: "Success Awaits",
    description:
      "From beginner to expert, our structured learning paths guide you every step of the way to achieve your professional goals.",
    buttonText: "Get Started Today",
    backgroundImage: P3,
  },
];

const cards = [
  {
    icon: <span className="text-blue-500">🔍 SEO</span>,
    title: "Search Engine Optimization",
  },
  {
    icon: <span className="text-blue-500">💻</span>,
    title: "Software Development",
  },
  {
    icon: <span className="text-purple-500">🌐</span>,
    title: "Website Development",
  },
  {
    icon: <span className="text-blue-500">📱</span>,
    title: "Mobile Development",
  },
  {
    icon: <span className="text-purple-500">🖥️</span>,
    title: "Desktop Development",
  },
  {
    icon: <span className="text-orange-500">🎮</span>,
    title: "Game Development",
  },
];

const courseList = [
  {
    id: 1,
    title: "The Complete 2023 Web Development Bootcamp",
    rating: 4.5,
    lessons: 10,
    duration: "5h 30m",
    instructor: {
      name: "John Doe",
      title: "Senior Developer",
      avatar: "/placeholder.svg",
    },
    originalPrice: 160,
    discountedPrice: 100,
    isFree: false,
    isRecorded: true,
  },
  {
    id: 2,
    title: "Build a full stack NFT Marketplace with React, Solidity",
    rating: 4.0,
    lessons: 8,
    duration: "4h",
    instructor: {
      name: "Jane Smith",
      title: "Blockchain Expert",
      avatar: "/placeholder.svg",
    },
    originalPrice: 120,
    discountedPrice: 80,
    isFree: false,
    isRecorded: true,
  },
  {
    id: 3,
    title: "The Complete ChatGPT Web Development Course",
    rating: 5.0,
    lessons: 12,
    duration: "6h 45m",
    instructor: {
      name: "AI Guru",
      title: "AI Specialist",
      avatar: "/placeholder.svg",
    },
    originalPrice: 0,
    discountedPrice: 0,
    isFree: true,
    isRecorded: true,
  },
  {
    id: 4,
    title: "The Web Developer Bootcamp 2024",
    rating: 4.8,
    lessons: 14,
    duration: "7h",
    instructor: {
      name: "Emily Nguyen",
      title: "Frontend Mentor",
      avatar: "/placeholder.svg",
    },
    originalPrice: 120,
    discountedPrice: 99,
    isFree: false,
    isRecorded: true,
  },
];

export default function HeroSlider() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (in ms)
      once: false, // animate only once
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  useEffect(() => {
    setLoading(true); // start loading
    api
      .get("/courses")
      .then((response) => {
        setCourses(response.data.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      })
      .finally(() => setLoading(false));
  }, []);
  // console.log(courses);

  // console.log(34567);

  if (loading) return <LoadingPage />;
  return (
    <div
      className="max-w-7xl m-auto mt-5"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div
        className="relative max-w-7xl m-auto h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-lg sm:rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex items-center shadow-2xl"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-opacity-30"></div>

              {/* Slide Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-full sm:max-w-2xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                    {slide.subtitle}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-6 md:mb-8 leading-relaxed opacity-90 max-w-lg">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg transition-colors duration-200 w-full sm:w-auto"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 sm:p-3 transition-all duration-200 shadow-lg z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 -black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm z-20">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* <div className="mt-5 flex items-center justify-center p-6"> */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="  grid md:grid-rows-1 md:grid-cols-6 grid-rows-2 grid-cols-4 gap-6 px-5 my-7 md:my-20"
      >
        {cards.map((el, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-lg shadow-md text-center hover:bg-gray-100 transition duration-200"
          >
            <div className="flex justify-center mb-3 text-3xl">{el.icon}</div>
            <h2 className="text-lg font-semibold text-gray-800">{el.title}</h2>
          </div>
        ))}
      </div>
      {/* </div> */}
      <div data-aos="fade-up">
        <Cart
          linkto="view-course"
          courses={courses}
          title="🔥 Limited Time Offers"
          showSeeAllButton={false}
        />
      </div>
      <TrustedCompanies />
    </div>
  );
}
