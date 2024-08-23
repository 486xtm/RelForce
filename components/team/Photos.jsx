import React from "react";
import team1 from "../../public/images/team1.png";
import team2 from "../../public/images/team2.png";
import team3 from "../../public/images/team3.png";
import team4 from "../../public/images/team4.png";
import team5 from "../../public/images/team5.png";
import Photo from "./Photo";
const Photos = () => {
  return(
  <div className="container mx-auto space-y-10 py-[50px]">
    <div className="flex gap-10">
      <Photo image = {team1} title = {""} name = {""} />
      <Photo image = {team2} title = {""} name = {""} />
      <Photo image = {team3} title = {""} name = {""} />
    </div>
    <div className="flex gap-10 w-2/3 mx-auto">
      <Photo image = {team4} title = {""} name = {""} />
      <Photo image = {team5} title = {""} name = {""} />
    </div>
  </div>);
};

export default Photos;
