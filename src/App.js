import React from "react";
import { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner"; 
import Cards from "./Components/Cards";

const App = () => {
  const [courses, setCourses] = useState(null);

  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      // Save data in Variable
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar />
      </div>
      
      <div>
        <Filter category={category} setCategory={setCategory} filterData = {filterData}/> 
      </div>
      
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  )
}

export default App;