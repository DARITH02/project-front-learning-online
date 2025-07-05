import { useState } from "react";
import { Heart, Clock, PlayCircle, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

export default function Cart({
  linkto = "",
  courses = [""],
  title = "Discount Courses",
  showSeeAllButton = true,
}) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (courseId) => {
    setFavorites((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              rating >= star ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {/* <span className="text-sm text-gray-500 ml-1">{rating.toFixed(1)}</span> */}
      </div>
    );
  };
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:p-0 md:mb-5 gap-6 py-5 px-5">
      {courses.map((course) => (
        <Link to={`${linkto}/${course.id}`}>
          <div
            key={course.id}
            className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Course Thumbnail */}
            <div className="relative">
              <div className="aspect-video flex items-center justify-center  text-center text-sm font-medium">
                {/* {course.title.includes("Web") && (
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col justify-center">
                                    <div className="text-4xl mb-2">💻</div>
                                    Web Development
                                </div>
                            )}
                            {course.title.includes("NFT") && (
                                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex flex-col justify-center">
                                    <div className="text-4xl mb-2">🎨</div>
                                    NFT Marketplace
                                </div>
                            )}
                            {course.title.includes("ChatGPT") && (
                                <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 flex flex-col justify-center">
                                    <div className="text-4xl mb-2">🤖</div>
                                    ChatGPT
                                </div>
                            )}
                            {course.title.includes("Bootcamp") && (
                                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex flex-col justify-center">
                                    <div className="text-4xl mb-2">🚀</div>
                                    Bootcamp
                                </div>
                            )} */}
                <img
                  className="w-full h-40 object-cover"
                  src={`http://127.0.0.1:8000/storage/${course.thumbnail}`}
                  alt={`http://127.0.0.1:8000/${course.thumbnail}`}
                />
              </div>

              {course.isRecorded && (
                <Badge className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 text-xs font-medium">
                  Recorded
                </Badge>
              )}

              <button
                onClick={() => toggleFavorite(course.id)}
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`w-4 h-4 ${
                    favorites.includes(course.id)
                      ? "text-red-500 fill-current"
                      : "text-gray-400"
                  }`}
                />
              </button>
            </div>

            {/* Course Info */}
            <div className="p-4">
              {/* <div className="w-full bg-blue-800">1 </div> */}
              <div className="mb-3">{renderStars(course.rating)}</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                {course.title}
              </h3>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <PlayCircle className="w-4 h-4" />
                  <span>
                    {course.lessons} Lesson
                    {course.lessons !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {/* {course.instructor.name} */}
                  </div>
                  <div className="text-xs text-gray-500">
                    {/* {course.instructor.title} */}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-green-600">
                    {course.price}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-600  bg-blue-800 hover:bg-blue-600 hover:text-white "
                >
                  🛒 Enroll
                </Button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
