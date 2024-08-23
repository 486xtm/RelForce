import React, { useState, useEffect } from "react";
import team1 from "../../public/images/team1.png";
import team2 from "../../public/images/team2.png";
import team3 from "../../public/images/team3.png";
import team4 from "../../public/images/team4.png";
import team5 from "../../public/images/team5.png";
import Photo from "./Photo";
const Photos = () => {
  const teamImages = [
    { image: team1, name: "Lorem Ipsum", title: "Designation" },
    { image: team2, name: "Lorem Ipsum", title: "Designation" },
    { image: team3, name: "Lorem Ipsum", title: "Designation" },
    { image: team4, name: "Lorem Ipsum", title: "Designation" },
    { image: team5, name: "Lorem Ipsum", title: "Designation" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="relative">
      <div className="lg:block hidden absolute block w-[350px] h-[500px] bg-[#FE5A36] blur-[200px] " />
      <div className="container mx-auto space-y-10 lg:py-[50px] pb-[40px]">
        <div className="lg:flex gap-10 hidden">
          <Photo image={team1} name={"Lorem lpsum"} title={"Designation"} />
          <Photo image={team2} name={"Lorem lpsum"} title={"Designation"} />
          <Photo image={team3} name={"Lorem lpsum"} title={"Designation"} />
        </div>
        <div className="lg:flex hidden gap-10 w-2/3 mx-auto">
          <Photo image={team4} name={"Lorem lpsum"} title={"Designation"} />
          <Photo image={team5} name={"Lorem lpsum"} title={"Designation"} />
          <div className="lg:block hidden bottom-0 right-0 absolute block w-[500px] h-[700px] bg-[#FE5A36] blur-[400px] " />

        </div>
        <div className="lg:hidden absolute block w-[300px] h-[300px] bg-[#FE5A36] blur-[100px] " />
        <div className="relative lg:hidden w-full h-96 overflow-hidden">
          <div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out">
            <div className="lg:hidden absolute block w-[350px] h-[350px] bg-[#FE5A36] blur-[200px]  whoblur" />
            <Photo
              image={teamImages[currentIndex].image}
              name={"Lorem lpsum"}
              title={"Designation"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
