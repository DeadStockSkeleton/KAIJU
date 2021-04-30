import '../../style.css';
import React from "react";
import { Link } from 'react-router-dom';

function Manga(props) {
    return (
        <>
        <Link to={"/manga/"+props.manga.id}>
            <span>
                <img width="90%" src={props.manga.img} alt={props.manga.name} className="m-2"/>
                <p>{props.manga.name}</p>
            </span>
        </Link>
      </>
    );
  }
  
  export default Manga;