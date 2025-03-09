import React, { useState ,useReducer } from "react";
import Vedio from "./Components/Vedio";
import videosData from "./Data/data"
import AddVideo from "./Components/AddVideo";

const App = () => {

      const [videos, dispatch] = useReducer(VideoReducer, videosData)
 
       function VideoReducer(videos,action){
          switch(action.type){
            case 'ADD': 
            return[ ...videos,{...action.payload,id:videos.length+1}
            ]
             case 'DELETE':
              return  videos.filter(video=>(video.id!==action.payload))

              case 'UPDATE':
            
                  const index=  videos.findIndex( v=>v.id===action.payload.id)
                  const newvideo =[...videos]
                  newvideo.splice(index,1,action.payload)
                  return newvideo
            default:return videos
          }
       }






        // const [videos, setvideos] = useState(videosData)
        const  [editable, seteditable] = useState("")
        //add video
        const addVideo = (video) => {
          // const newVideo = {
          //   ...video, id: videos.length + 1
          // };
          // setvideos([...videos, newVideo]);
        dispatch({type:'ADD',payload:video})
        };
   
        //delete video
          const deletevideo=(id)=>{
            dispatch({type:'DELETE',payload:id})
              //  setvideos( videos.filter(video=>(video.id!=id)))
                
          }
       // edit video
       const editvideo =(id)=>{
        seteditable( videos.find(video =>video.id===id))
       }
       const updatevideo =(video)=>{
        dispatch({type:'UPDATE',payload:video})
      //  const index=  videos.findIndex( v=>v.id===video.id)
      //  const newvideo =[...videos]
      //  newvideo.splice(index,1,video)
      //  setvideos(newvideo)
       }
  

  return (
    <div className="max-w-screen min-h-screen p-4">
       <AddVideo addVideo={addVideo}  editable={editable} updatevideo={updatevideo} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
        {videos.map((video) => (
          <Vedio 
            key={video.id} 
            id={video.id} 
            title={video.title} 
            views={video.views} 
            channel={video.channel} 
            deletevideo={deletevideo}
            editvideo={editvideo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
