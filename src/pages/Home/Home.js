import React, { useState } from 'react';
import './Home.css';
import Header from '../../Component/Header/Header';
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import AppDownload from '../../Component/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");
  
  return (
    
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
      <AppDownload/>
    </div>
  )
}

export default Home;
