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
        id="videoPlayer"
        className="w-full"
        src={`http://127.0.0.1:8000/storage/videos_13/1751633607_6867cec740d48_2025-06-25_02-38-43.mp4`} // replace with your video path
        controls={true}
      />
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center space-x-4 text-white">
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20 h-8 w-8"
          >
            <Play className="h-4 w-4" />
          </Button>

          {/* <div className="flex-1">
            <Slider defaultValue={[30]} max={100} step={1} className="w-full" />
          </div> */}

          <span className="text-sm">-01:23</span>

          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20 h-8 w-8"
          >
            <Volume2 className="h-4 w-4" />
          </Button>

          {/* <Slider defaultValue={[70]} max={100} step={1} className="w-20" /> */}

          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20 h-8 w-8"
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
