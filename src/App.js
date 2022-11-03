// Create an application (languages of your choosing) 
// using the National Parks API. The application should allow a 
// customer to select a state and see a list of all national parks in 
// that state. Results should show the park name, description, 
// picture from the park (if available, if not the National Park logo), 
// and provide a way to navigate to the park website. 
// If the list is over 10 results, implement pagination.


import { useState } from "react";
import './App.css'; 



function App() {
  const [parksData, setParksData] = useState({});

  const handleSubmit = async () => {
    const response = await fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=K54Ux2w79vRCRO9fWdxuMxN38EzPvYTPb43Lq9MC')

    // parse JSON response into a javascript object
    const data = await response.json();
    setParksData(data)
  }
  console.log(parksData)
  return (
    <div>
    <button onClick={handleSubmit}>Submit</button>
    <h2>{data.fullname}</h2>
    </div>
  );
}

export default App;

// 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=K54Ux2w79vRCRO9fWdxuMxN38EzPvYTPb43Lq9MC'

// KEY K54Ux2w79vRCRO9fWdxuMxN38EzPvYTPb43Lq9MC