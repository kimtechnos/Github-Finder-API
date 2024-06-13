import { useState } from 'react';
import Preview from './Components/Preview/Preview';
import Search from './Components/Search/Search';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Search/>
    
    <Preview/>
      
    </>
  )
}

export default App
