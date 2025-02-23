import React from "react";
const PET_SPRITE = "/pet-sprites.png";

interface PetsProps {
 petType: string;
 petBreed: number;
}

const Pets: React.FC<PetsProps> = ({ petBreed, petType }) => {
 if (petType === "Cat") {
  if (petBreed === 1) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "0 0",
     }}
    />
   );
  } else if (petBreed === 2) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "-48px 0",
     }}
    />
   );
  } else if (petBreed === 3) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "-96px 0",
     }}
    />
   );
  } else if (petBreed === 4) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "0 -86px",
     }}
    />
   );
  } else if (petBreed === 5) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "-144px 0",
     }}
    />
   );
  }
 }

 if (petType === "Dog") {
  if (petBreed === 1) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "-48px -86px",
     }}
    />
   );
  } else if (petBreed === 2) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "-96px -86px",
     }}
    />
   );
  }
  if (petBreed === 3) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "-144px -86px",
     }}
    />
   );
  } else if (petBreed === 4) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "-192px 0",
     }}
    />
   );
  } else if (petBreed === 5) {
   return (
    <div
     className="w-[48px] h-[86px] bg-no-repeat"
     style={{
      backgroundImage: `url(${PET_SPRITE})`,
      backgroundPosition: "-192px -86px",
     }}
    />
   );
  }
 }

 return null;
};

export default Pets;
