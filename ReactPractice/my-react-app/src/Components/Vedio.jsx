import React from "react";

const Vedio = ({ id, views, title, channel,deletevideo,editvideo }) => {
  return (
    <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      
      <div className="w-full h-40 relative">
        <img
          className="w-full h-full object-cover"
          src="https://placebear.com/320/180"
          alt="Bear"
        /> <button className="bg-black absolute right-10 top-1 px-2 py-1 text-sm rounded-md " onClick={()=>(editvideo(id))}>Edit</button>
         <button className="bg-black absolute right-1 top-1 px-2 py-1 text-sm rounded-md" onClick={()=>deletevideo(id)} >X</button>
      </div>

      
      <div className="p-3">
        <div className="text-lg font-bold text-black top-1">{title}</div>
        <div className="text-sm text-gray-500">{views} views • {channel}</div>
      </div>
    </div>
  );
};

export default Vedio;
