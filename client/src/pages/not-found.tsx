import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F1FAEE]">
      <Card className="w-full max-w-md mx-4 shadow-lg border-none">
        <CardContent className="pt-8 pb-8">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-16 w-16 text-[#E63946] mb-4" />
            <h1 className="text-3xl font-bold text-primary font-['Playfair_Display']">404 Page Not Found</h1>
            <div className="w-16 h-1 bg-[#E63946] my-4"></div>
          </div>

          <p className="mt-4 mb-8 text-lg text-center text-[#293241]">
            We're sorry, but the page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <a className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-bold transition duration-150">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </a>
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center justify-center bg-[#457B9D] hover:bg-[#457B9D]/90 text-white px-6 py-3 rounded-md font-bold transition duration-150"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
