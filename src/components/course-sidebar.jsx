import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/Card"
import { Heart, Play, FileText, Clock, Smartphone, Award } from "lucide-react"

export function CourseSidebar() {
  return (
    <Card className="sticky top-6">
      <CardContent className="p-6 space-y-6">
        {/* Price and Actions */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-green-600">Free</span>
            <Button size="icon" variant="ghost">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enroll Now</Button>

          <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
            Add To Cart
          </Button>
        </div>

        {/* Course Includes */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">This course includes:</h3>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Play className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">2h 40m Hours video</span>
            </div>

            <div className="flex items-center space-x-3">
              <FileText className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">0 Lesson</span>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Full lifetime access</span>
            </div>

            <div className="flex items-center space-x-3">
              <Smartphone className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Access on mobile and TV</span>
            </div>

            <div className="flex items-center space-x-3">
              <Award className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">Certificate of completion</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
