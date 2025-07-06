import { VideoPlayer } from "../components/video-player";
import { CourseTabs } from "../components/course-tabs.jsx";
import { CourseSidebar } from "../components/course-sidebar.jsx";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios.js";

export default function CourseView() {
  const [course, setCourse] = useState([]);
  const { id } = useParams();

  console.log(id);

  axios
    .get(`view-course/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

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
              <h1 className="text-3xl font-bold text-gray-900">
                The Complete ChatGPT Web Development Code Along - Javascript
              </h1>

              <div className="flex items-center space-x-4">
                {/* <Avatar className="h-10 w-10">
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar> */}
                <div>
                  <p className="font-medium text-gray-900">Instructor</p>
                  <p className="text-sm text-gray-600">
                    Software engineer | Laravel | PHP
                  </p>
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
                  <span className="text-sm text-gray-600">(0.00)</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>2h 40m</span>
                  <span>•</span>
                  <span className="text-orange-500 font-medium">0 Lesson</span>
                </div>
              </div>

              <p className="text-gray-700">
                Learn to code with ChatGPT and 10x your Web Development
                Productivity - Build a MERN Project from scratch with ChatGPT
              </p>
            </div>

            {/* Course Tabs */}
            <CourseTabs />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
