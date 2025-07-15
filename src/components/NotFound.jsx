import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-8">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Large 404 Display */}
        <div className="space-y-4">
          <h1 className="text-9xl md:text-[12rem] font-bold text-muted-foreground/30 leading-none">
            404
          </h1>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved to
              another location.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="flex items-center gap-2]">
            <Link to="/" className="flex gap-3.5 py-2.5 px-3">
              <Home className="w-5 h-5" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Additional Help Text */}
        <div className="pt-8 text-sm text-muted-foreground">
          <p>
            If you believe this is an error, please contact support or try
            refreshing the page.
          </p>
        </div>
      </div>
    </div>
  );
}
