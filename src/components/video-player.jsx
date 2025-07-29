"use client";

import { Play, Volume2, Maximize, SkipBack, SkipForward } from "lucide-react";
import { Button } from "./ui/button";
// import { Slider } from "@/components/ui/slider";

export function VideoPlayer() {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <div className="aspect-video bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
        {/* <div className="flex items-center space-x-4 text-white">
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20"
          >
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20 h-12 w-12"
          >
            <Play className="h-8 w-8" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20"
          >
            <SkipForward className="h-6 w-6" />
          </Button>
        </div> */}

        <video
          autoPlay
          
          id="videoPlayer"
          className="w-full"
          src={`http://127.0.0.1:8000/storage/videos_intro/intro.mp4`} // replace with your video path
          controls
        />
      </div>
    </div>
  );
}
