"use client";
import { useThemeState } from "@/context/zustand";
import { Colors } from "@/utils/Colors";
import Link from "next/link";

export default function NotFound() {
  const { theme } = useThemeState();
  const themeColors = Colors[theme];

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${themeColors.bg} ${themeColors.text} px-4`}
    >
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page not found</h2>
        <p className="text-lg mb-8 opacity-80">
          The page you're looking for doesn't exist or has been moved. Don't
          worry, we'll help you find your way back.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 
              ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 
              ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
          >
            Contact Support
          </Link>
          <button
            onClick={handleRefresh}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2
              ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh Page
          </button>
        </div>

        <div className="mt-12 text-sm opacity-60">
          <p>If you believe this is an error, please let us know.</p>
        </div>
      </div>
    </div>
  );
}
