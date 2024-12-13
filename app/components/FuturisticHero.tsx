import { FC } from "react";

export const FuturisticHero: FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-5">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]"></div>
        {/* Floating shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};
