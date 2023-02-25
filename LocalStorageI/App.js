import React from 'react';

const App = () => {
  const [str, setStr] = React.useState("")

  const handleChange = (e) => {
    setStr(e.target.value)
    localStorage.setItem("inputValue", e.target.value)    
  }

  React.useEffect(() => {
    setStr(localStorage.getItem("inputValue"))
  }, [])
  
  return (
    <div>
      <input data-testid='input-id' type="text" value={str} onChange={handleChange} />
    </div>
  );
};

export default App;