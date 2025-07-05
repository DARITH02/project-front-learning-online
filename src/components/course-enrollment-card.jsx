import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/Card";
import { Heart, Play, FileText, Clock, Smartphone, Award } from "lucide-react";

export function CourseEnrollmentCard() {
  return (
    <Card className="w-full max-w-md mx-auto shadow-sm border border-gray-200">
      <CardContent className="p-6 space-y-6">
        {/* Price and Wishlist */}
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-green-600">Free</span>
          <Button
            size="icon"
            variant="ghost"
            className="text-gray-400 hover:text-red-500"
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 text-base">
            Enroll Now
          </Button>

          <Button
            variant="outline"
            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-white font-medium py-3 text-base"
          >
            Add To Cart
          </Button>
        </div>

        {/* Course Includes Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            This course includes:
          </h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Play className="h-5 w-5 text-gray-600 flex-shrink-0" />
              <span className="text-gray-700">2h 40m Hours video</span>
            </div>

            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-gray-600 flex-shrink-0" />
              <span className="text-gray-700">0 Lesson</span>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-gray-600 flex-shrink-0" />
              <span className="text-gray-700">Full lifetime access</span>
            </div>

            <div className="flex items-center space-x-3">
              <Smartphone className="h-5 w-5 text-gray-600 flex-shrink-0" />
              <span className="text-gray-700">Access on mobile and TV</span>
            </div>

            <div className="flex items-center space-x-3">
              <Award className="h-5 w-5 text-gray-600 flex-shrink-0" />
              <span className="text-gray-700">Certificate of completion</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
