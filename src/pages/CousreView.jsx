import { VideoPlayer } from "../components/video-player";
import { CourseTabs } from "../components/course-tabs.jsx";
import { CourseSidebar } from "../components/course-sidebar.jsx";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios.js";

export default function CourseView() {
  const [course, setCourse] = useState([]);
  const [category,setCategory]=useState([])
  const { id } = useParams();

  useEffect(() => {
    // console.log(id);
    try {
      const getCourses = async () => {
        const rs = await axios.get(`view-courses/${id}`);
        const data = rs.data.data;
        setCourse(data);
        setCategory(data.category)
        // console.log(data.category['title']);
      };
      getCourses();
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  }, [id]);
// console.log(category['title']);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        Video Player
        <div className="mb-8">
          <VideoPlayer />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">
                {/* The Complete ChatGPT Web Development Code Along - Javascript */}
                {course.title}
              </h1>

              <div className="flex items-center space-x-4">
                {/* <Avatar className="h-10 w-10">
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar> */}
                <div>
                  <p className="font-medium">Instructor</p>
                  <p className="text-sm">{category["title"]}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="text-orange-500 font-medium">0</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-gray-300" />
                    ))}
                  </div>
                  <span className="text-sm">(0.00)</span>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <span>2h 40m</span>
                  <span>•</span>
                  <span className="text-orange-500 font-medium">0 Lesson</span>
                </div>
              </div>

              <p className="">{course.description}</p>
            </div>

            {/* Course Tabs */}
            <CourseTabs />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar price={course.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
