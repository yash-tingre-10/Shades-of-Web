import React from 'react';
import { useEffect, useState  } from 'react';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import useFetch from './Hooks/useFetch.js';


function App() {

const { fetchedData, loading, error } = useFetch( );


  return (
    <div className="m-auto mt-[183px] w-full max-w-screen-xl">
      <SectionOne  fetchedData={ fetchedData }/>
      <SectionTwo  fetchedData={ fetchedData } />
    </div>
  )
}

export default App