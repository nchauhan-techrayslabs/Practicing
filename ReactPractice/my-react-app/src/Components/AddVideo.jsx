import React from 'react'
 import Button from "./Button"
 import { useState } from 'react';
 import { useEffect } from 'react';

const initial = {
    title: '',
    views: '',
    channel: "Wildlife HD",

}

 //deleted props that are passed (addvideo,update)here and replaced with dispatch
const AddVideo = ({ dispatch  ,editable}) => {           

   const [video,setvideo] =useState(initial)

   
   const submit = (e) => {
    e.preventDefault();

    if (!video.title.trim() || !video.views.trim()) {
      alert("Please enter both title and views.");
      return;
    }

    if (editable) {

      dispatch({type:'UPDATE',payload:video})

    } else {
      dispatch({type:'ADD',payload:video})
    }

    setvideo(initial);
  };
     function handlechange(e){
       
          setvideo({...video,[e.target.name]:e.target.value})
       
         
     }

     useEffect(() => {
      if (editable) {
        setvideo(editable);
      }
    }, [editable]);
   


  return (
    <div  className=' flex flex-col ' >
    <input   className=' w-64 bg-amber-50 m-2 text-black rounded-md' type="text"     onChange={ handlechange}  
    value={video.title}  placeholder='Enter Title' name="title" /> 
    <input   className=' w-64 bg-amber-50 m-2 text-black  rounded-md ' type='text'    onChange={handlechange}
    placeholder='Enter Views' value={video.views} name="views" />
   <Button submit={submit}  editable={editable}/>
    </div>
  )
}

export default AddVideo