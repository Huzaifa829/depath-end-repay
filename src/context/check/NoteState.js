import { useEffect, useState } from "react"
import noteContext from "./NoteContext"

const NoteState = (props) => {
        const state ={
            "name":"huzaifa",
            "fb":"5b"
        }
      const [set,add]=useState(state)
    const update=()=>{
      setTimeout(()=>{
        add({
          "name":"ahmed",
          "fb":"abc",
        })
      },4000)
    }
  return (
<noteContext.Provider value={{set,update}}>
  {props.children}
</noteContext.Provider>

  )
}

export default NoteState
