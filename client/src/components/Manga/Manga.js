import '../../style.css';
import React from "react";
import { Link, BrowserRouter as Router, Route  } from 'react-router-dom';


function Manga(props) {
    return (
        <>
        {props.mangas.map(manga => (
         <Link className="text-decoration-none lh-lg" to={"/manga/"+manga.id}>
            <span className="manga text-center text-light">
                <img width="90%" src={manga.img} alt={manga.name} className="m-2 manga-img"/>
                <p>{manga.name}</p>
            </span>
        </Link>   
        ))}
        
      </>
    );
  }
  
  export default Manga;