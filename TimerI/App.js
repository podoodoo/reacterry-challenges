import React from 'react'

const App = () => {
  const [mm, setMM] = React.useState("")
  const [ss, setSS] = React.useState("")
  const [time, setTime] = React.useState("")
  
  React.useEffect(()=>{
    const now = Date.now()
    const timeInt = setInterval(()=>{setTime(Date.now() - now)}, 1000)
    return (() => {
      clearInterval(timeInt)
    })
  }, [])

  React.useEffect(()=>{
    setSS(Math.floor(time / 1000) % 60)
    setMM(Math.floor(time / 1000 / 60))
  }, [time])
  
  return (
    <div>{(mm + "").padStart(2, "0")}:{(ss + "").padStart(2, "0")}</div>
  )
};

export default App;