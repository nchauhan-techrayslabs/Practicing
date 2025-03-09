import React from 'react'

export const Button = ({submit,editable}) => {
      
  return (
    <div className="m-2">
    <button 
      onClick={submit} 
      className="px-4 py-2 bg-blue-500 text-white rounded-md">{
       editable ?'Edit video':"Add Video" 
      }
      
    </button>
  </div>
   
  )
}
export default Button;
