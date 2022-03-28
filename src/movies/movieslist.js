import React, { useEffect, useState } from 'react'
import "./movies.css"
import Header from './header'
import MoviesContent from './moviesContent'

const Apikey = `6f52c89e`;



function Movieslist() {
  const [inputVal,setInputVal] = useState();
  const[timeoutId,setTimeoutId] = useState()
  const[storeData,setStoreData] =useState([]);

  const dataColection = async (searchStr) => {
    let response = await fetch(`https://www.omdbapi.com/?s=${!searchStr === "Undefine"?"dil":searchStr}&apikey=${Apikey}`);
    let res = await response.json();
    console.log(res.Search[0]);
    let results= res.Search.map((cuElm,index)=>{
      return (
        <div className="pass_container">
            <MoviesContent text = {cuElm} id ={index}/>
        </div>
      )
    })
    setStoreData(results);
  }

  useEffect(()=>{
    dataColection();
  },[]);

  const inputHandler = (e)=>{
    clearTimeout(timeoutId);
    let inputData = e.target.value;
    console.log(inputData);
    setInputVal(inputData);
    const timeOut = setTimeout(()=> dataColection(inputData),500);
    setTimeoutId(timeOut);
  }
  return (
    <>
        <Header onchangeHandle={inputHandler}/>
       
        <div class="row">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{storeData}</div>

        </div>

        
       
    </>
  )
}

export default Movieslist