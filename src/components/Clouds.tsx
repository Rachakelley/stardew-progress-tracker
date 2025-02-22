import React from "react";
import "./Clouds.css";
const CLOUD_SPRITE = "/cloud-sprites.png";

const Clouds: React.FC = () => {
 return (
  <>
   <div
    className="absolute top-[23%] w-[149px] h-[66px] z-1 bg-no-repeat animate-float-bob-lg"
    style={{
     backgroundImage: `url(${CLOUD_SPRITE})`,
     backgroundPosition: "0 -471px",
    }}
   />
   <div
    className="absolute top-[15%] w-[123px] h-[55px] z-1 bg-no-repeat animate-float-bob-md"
    style={{
     backgroundImage: `url(${CLOUD_SPRITE})`,
     backgroundPosition: "-152px -447px",
    }}
   />
   <div
    className="absolute top-[25%] w-[64px] h-[36px] z-1 bg-no-repeat animate-float-bob-sm"
    style={{
     backgroundImage: `url(${CLOUD_SPRITE})`,
     backgroundPosition: "-410px -467px",
    }}
   />
   <div
    className="absolute top-[25%] w-[82px] h-[46px] z-1 bg-no-repeat animate-float-bob-sm-translucent"
    style={{
     backgroundImage: `url(${CLOUD_SPRITE})`,
     backgroundPosition: "-20px -414px",
    }}
   />
   <div
    className="absolute top-[35%] w-[123px] h-[82px] z-1 bg-no-repeat animate-float-bob-md-translucent"
    style={{
     backgroundImage: `url(${CLOUD_SPRITE})`,
     backgroundPosition: "-115px -349px",
    }}
   />
   <div
    className="absolute top-[15%] w-[168px] h-[116px] z-1 bg-no-repeat animate-float-bob-lg-translucent"
    style={{
     backgroundImage: `url(${CLOUD_SPRITE})`,
     backgroundPosition: "-260px -336px",
    }}
   />
   <div
    className="absolute top-[10%] w-[494px] h-[531px] z-1 bg-no-repeat animate-float-bob-block opacity-80"
    style={{
     backgroundImage: `url(${CLOUD_SPRITE})`,
     backgroundPosition: "0 -6px",
    }}
   />
  </>
 );
};

export default Clouds;
