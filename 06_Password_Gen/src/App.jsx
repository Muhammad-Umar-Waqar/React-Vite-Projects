import { useState, useRef, useEffect, useCallback } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
  window.navigator.clipboard.writeText(password)
  }, [password] )



const passwordGenerator = useCallback(()=>{

  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVVWXYZabcdefghijklmnopqrstuvwxyz"
  let char = "!@#$%&*(_+):{}|\."


  if (NumberAllowed) {
    str += '0123456789'
  }
  if (characterAllowed){
    str += "!@#$%^&()-={}[]~`"
  }

  
  for (let i = 1; i <= length; i++) {
    char = Math.floor(Math.random()* str.length +1)
    pass += str.charAt(char)
  }
  setpassword(pass)
  }, [length, NumberAllowed, characterAllowed, setpassword])
  
 useEffect(()=>{
  passwordGenerator()
 }, [length, NumberAllowed, characterAllowed, passwordGenerator] )



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-gray-800 text-orange-500 h-20 ">
         <h1 className="text-white text-center my-3">
    Password Generator
    </h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-6'>
  <input type="text" 
  value={password} 
  className='outline-none w-full py-1 px-3' 
  placeholder='password'
   readOnly
   ref={passwordRef} />
  <button 
  onClick={copyPasswordToClipboard}
  className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
      className='curosor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}
       />
       <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type='checkbox'
      defaultChecked={NumberAllowed} 
      id="numberInput"
      onChange={()=>{
        setNumberAllowed((prev)=>!prev)
      }}
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>

    <div className="flex items-center gap-x-1">
      <input type='checkbox'
      defaultChecked={characterAllowed} 
      id="characterInput"
      onChange={()=>{
        setcharacterAllowed((prev)=>!prev)
      }}
      />
      <label htmlFor="characterInput">Characters</label>
    </div>


    </div>
    </div>
    </>
  )
}

export default App
