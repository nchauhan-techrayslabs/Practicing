 import { useCallback, useState,useEffect ,useRef} from "react"
function App() {
  const [length, setlength] = useState(8);
  const [character,setcharacter] = useState(false)
  const [number,setnumber] = useState(false)
  const [password,setpassword] = useState("")

 const passwordgenrator = useCallback( () =>{
   let pass=""
   let str ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(number)
      {str+="0123456789"}
    if(character)
       {str+="!@#$%^&*"}

    for( let i=1;i<length ;i++){

      let char = Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char)
    }
    //  console.log(pass);
    setpassword(pass)

 } ,[number,character,length,setpassword])

// use call back is use to store the rerendering data in cache for optmizing
 const copy = useCallback(()=>{
  refpass.current?.select()
  window.navigator.clipboard.writeText(password)
 },[password])
 useEffect(() => {
     passwordgenrator()

 }, [length,number,character,passwordgenrator]);

 const refpass = useRef(null)
//  passwordgenrator();

  return (
    
    <div className="flex justify-center items-center w-screen h-screen bg-slate-500">
    <div className="w-full max-w-md px-5 py-10 shadow-md rounded-lg bg-slate-400 text-center">
      <h1 className="text-white text-xl  mb-4">PASSWORD GENERATOR</h1>

      <div className="flex items-center justify-between text-black  p-2">
        <input
          className="w-full outline-none text-lg bg-white rounded-l-md "
          type="text"
          value={password}
          placeholder="Generated password"
          readOnly
          ref={refpass}
        />
        <button className="px-3 py-0.5 bg-blue-500 text-white rounded-r-md hover:bg-blue-600" onClick={copy}>
          Copy
        </button>
      </div>

      <div className="flex  gap-x-2">
        <div className="flex items-center"> 
        <input
          type="range"
          min={8}
          max={50}
          value={length}
          onChange={(e) => setlength(e.target.value)}
          className="p-2 m-2"
        /> <label className="text-white text-sm">Length: {length}</label> 
         </div>
        <div className=" flex items-center">
          <input className="m-2" type="checkbox" defaultChecked={character} onChange={()=>{ setcharacter( (prev) =>!prev)}} />
          <label>Character</label>
          </div>
          <div className="flex items-center">
            <input className=" m-2 "type="checkbox" defaultChecked={number} onChange={()=>{ setnumber( (prev) =>! prev)}} />
            <label>Number</label>
          </div>
      </div>
    </div>
  </div>
    
  )
}

export default App
