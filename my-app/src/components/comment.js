import React from "react";
const CommentsTemplate=({ name, date, rating, comment, likes, dislikes, profileImage })=>{
    return( 
        
           <div className="p-4 border-[#7E7E80] border-2 min-w-full h-[150px] rounded-lg flex flex-row px-6 min-h-fit">
        <div className="w-[90px]">
          <img
            className="h-11 mr-[1vw] w-auto rounded-full"
            src={profileImage}
            alt=""
          />
        </div>
        <div className="px-3">
          <div className="flex flex-row justify-between items-center ">
            <div className="flex flex-row items-center">
              <div className="font-semibold text-lg">{name}</div> 
              <div className="text-xs pl-[2.5vw] text-gray-400 font-semibold">{date}</div>
            </div>
            <div className="flex flex-row px-2 text-xs items-center pt-[1vh] text-gray-500">
              <img
                src="../Images/ri-star-fill.png"
                className="pr-1"
                alt=""
              />
              <p>
                <span className="pr-3 text-black text-[1rem] font-bold">{rating}</span>
              </p>
            </div>
          </div>
          <div className="text-[#7E7E80] pt-[1vh]">
           {comment}
          </div>
          <div className="flex flex-row items-center pt-[10px]">
            <div className="px-2"><i className="fa-solid px-2 fa-thumbs-up"></i>{likes}</div>
            <div className="px-2"><i className="fa-solid px-2 fa-thumbs-down"></i>{dislikes}</div>
          </div>
        </div>
      </div>);
}
export default CommentsTemplate;