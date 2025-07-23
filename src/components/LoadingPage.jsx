import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        {/* Main loading spinner */}
        <div className="relative">
          <div className="w-16 h-16 mx-auto">
            <Loader2 className="w-16 h-16 animate-spin text-slate-600" />
          </div>
          {/* Pulsing ring around spinner */}
          <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-slate-300 animate-ping opacity-20"></div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-800">Loading</h2>
          <p className="text-slate-600">
            Please wait while we prepare everything for you
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Skeleton content preview */}
        <div className="mt-12 space-y-4 max-w-md mx-auto">
          <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
          <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
