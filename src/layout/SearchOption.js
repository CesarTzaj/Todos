import React from "react";

function SearchOption({searchValue, SetSearchValue}){

  const onSearchButon = (event)=>{
    SetSearchValue(event.target.value)
  }
  return (
  <section className='searchSection'>
  <div>
    <input onChange={onSearchButon} placeholder="ToDo's"/>
    </div>
  <button>Search</button>
 </section>
 );
}

export {SearchOption}