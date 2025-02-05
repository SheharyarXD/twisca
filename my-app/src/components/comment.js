import React, { useContext } from "react";
import { ReviewsContext } from "../utils/ReviewContext";

const CommentsTemplate = ({ name, date, rating, comment, likes, dislikes, profileImage ,reviewid}) => {
  const {updateReview}=useContext(ReviewsContext)
  return (
    <div className="p-4 border-[#7E7E80] border-2 w-full max-w-lg sm:max-w-full md:max-w-full md:min-w-full rounded-lg flex flex-wrap md:flex-nowrap px-6">
      {/* Profile Image */}
      <div className="w-16 flex-shrink-0">
        <img className="h-11 w-11 rounded-full" src={profileImage} alt="User Profile" />
      </div>

      {/* Comment Details */}
      <div className="flex-1 px-3">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          {/* Name & Date */}
          <div className="flex flex-wrap items-center">
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-xs md:pl-4 text-gray-400 font-semibold">{date}</div>
          </div>

          {/* Rating */}
          <div className="flex items-center text-xs text-gray-500 pt-2 md:pt-0">
            <img src="../Images/ri-star-fill.png" className="pr-1 w-4 h-4" alt="Star" />
            <p className="text-black text-[1rem] font-bold">{rating}</p>
          </div>
        </div>

        {/* Comment Text */}
        <div className="text-[#7E7E80] pt-2">{comment}</div>

        {/* Like & Dislike Buttons */}
        <div className="flex space-x-4 pt-3">
          <div onClick={() => updateReview(reviewid, "like")} className="flex items-center space-x-1 text-gray-600">
            <i className="fa-solid fa-thumbs-up"></i>
            <span>{likes}</span>
          </div>
          <div onClick={() => updateReview(reviewid, "dislike")} className="flex items-center space-x-1 text-gray-600">
            <i className="fa-solid fa-thumbs-down"></i>
            <span>{dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsTemplate;
