"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Search,
  Play,
  Clock,
  BookOpen,
  Star,
  Download,
  MoreVertical,
  Grid3X3,
  List,
  Trophy,
  Calendar,
  User,
} from "lucide-react";

export default function MyCoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [sortBy, setSortBy] = useState("recent");

  // Mock data for purchased courses
  const [courses] = useState([
    {
      id: 1,
      title: "Complete React Development Course",
      instructor: "John Smith",
      category: "Web Development",
      progress: 75,
      duration: "12 hours",
      lessons: 45,
      rating: 4.8,
      thumbnail: "/placeholder.svg?height=200&width=300",
      lastAccessed: "2 days ago",
      completed: false,
      certificate: false,
      level: "Intermediate",
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      instructor: "Sarah Johnson",
      category: "Programming",
      progress: 100,
      duration: "8 hours",
      lessons: 32,
      rating: 4.9,
      thumbnail: "/placeholder.svg?height=200&width=300",
      lastAccessed: "1 week ago",
      completed: true,
      certificate: true,
      level: "Advanced",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Chen",
      category: "Design",
      progress: 45,
      duration: "15 hours",
      lessons: 60,
      rating: 4.7,
      thumbnail: "/placeholder.svg?height=200&width=300",
      lastAccessed: "3 days ago",
      completed: false,
      certificate: false,
      level: "Beginner",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. Emily Davis",
      category: "Data Science",
      progress: 30,
      duration: "20 hours",
      lessons: 75,
      rating: 4.6,
      thumbnail: "/placeholder.svg?height=200&width=300",
      lastAccessed: "5 days ago",
      completed: false,
      certificate: false,
      level: "Intermediate",
    },
    {
      id: 5,
      title: "Digital Marketing Mastery",
      instructor: "Alex Rodriguez",
      category: "Marketing",
      progress: 90,
      duration: "10 hours",
      lessons: 40,
      rating: 4.5,
      thumbnail: "/placeholder.svg?height=200&width=300",
      lastAccessed: "1 day ago",
      completed: false,
      certificate: false,
      level: "Beginner",
    },
    {
      id: 6,
      title: "Mobile App Development with Flutter",
      instructor: "Lisa Wang",
      category: "Mobile Development",
      progress: 60,
      duration: "18 hours",
      lessons: 55,
      rating: 4.8,
      thumbnail: "/placeholder.svg?height=200&width=300",
      lastAccessed: "4 days ago",
      completed: false,
      certificate: false,
      level: "Intermediate",
    },
  ]);

  const categories = [
    "all",
    "Web Development",
    "Programming",
    "Design",
    "Data Science",
    "Marketing",
    "Mobile Development",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "progress":
        return b.progress - a.progress;
      case "title":
        return a.title.localeCompare(b.title);
      case "rating":
        return b.rating - a.rating;
      default: // recent
        return new Date(b.lastAccessed) - new Date(a.lastAccessed);
    }
  });

  const completedCourses = courses.filter((course) => course.completed).length;
  const totalProgress = Math.round(
    courses.reduce((sum, course) => sum + course.progress, 0) / courses.length
  );

  const CourseCard = ({ course }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={course.thumbnail || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
          <Button
            size="sm"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <Play className="w-4 h-4 mr-2" />
            Continue Learning
          </Button>
        </div>
        <Badge
          className={`absolute top-2 right-2 ${
            course.level === "Beginner"
              ? "bg-green-500"
              : course.level === "Intermediate"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {course.level}
        </Badge>
        {course.certificate && (
          <Badge className="absolute top-2 left-2 bg-purple-500">
            <Trophy className="w-3 h-3 mr-1" />
            Certified
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </CardTitle>
          <Button variant="ghost" size="sm">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
        <CardDescription className="flex items-center text-sm">
          <User className="w-4 h-4 mr-1" />
          {course.instructor}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            {course.lessons} lessons
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-500" />
            {course.rating}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            <Calendar className="w-4 h-4 inline mr-1" />
            {course.lastAccessed}
          </span>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const CourseListItem = ({ course }) => (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={course.thumbnail || "/placeholder.svg"}
              alt={course.title}
              className="w-24 h-16 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate hover:text-blue-600 transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{course.duration}</span>
              <span>{course.lessons} lessons</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                {course.rating}
              </div>
            </div>
          </div>

          <div className="text-right space-y-2">
            <Badge variant={course.completed ? "default" : "secondary"}>
              {course.progress}% Complete
            </Badge>
            <div className="w-32">
              <Progress value={course.progress} className="h-2" />
            </div>
          </div>

          <Button variant="outline" size="sm">
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
              <p className="text-gray-600 mt-1">
                Continue your learning journey
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {courses.length}
                </div>
                <div className="text-sm text-gray-500">Total Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {completedCourses}
                </div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {totalProgress}%
                </div>
                <div className="text-sm text-gray-500">Avg Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="recent">Recently Accessed</option>
              <option value="progress">Progress</option>
              <option value="title">Title</option>
              <option value="rating">Rating</option>
            </select>

            <div className="flex border border-gray-300 rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Course Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedCourses.map((course) => (
              <CourseListItem key={course.id} course={course} />
            ))}
          </div>
        )}

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
