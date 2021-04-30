import React, { useEffect, useState } from "react";
import API from '../utils/API';
import Manga from '../Manga/Manga';
function Discover() {
    const [mangas, setMangas] = useState([]);

    useEffect(() => {
        getMangas();
    },[]);

    function getMangas(){
        API.getAll().then(mangas => {
            console.log(mangas)
        }).catch(err => console.log(err))
    }
  return (
    <div>
      <nav class="nav nav-pills nav-fill">
  <button class="nav-link active btn" aria-current="page">All</button>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
<div className="row container row-cols-5 p-3 m-auto w-100">
    
</div>
    </div>
  );
}

export default Discover;