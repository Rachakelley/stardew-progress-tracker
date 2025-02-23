import React from "react";
import "./Loading.css";

const Loading: React.FC = () => (
 <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
  <div className="relative text-center mt-4">
   <img src="/scroll.png" alt="Loading Scroll" className="mx-auto" />
   <h2 className="tracking-wide text-red-950 absolute inset-0 flex items-center justify-center gap-1 text-lg drop-shadow-lg">
    <span>Loading</span>
    <span data-text="...." className="dots"></span>
   </h2>
  </div>
 </div>
);

export default Loading;
