import React, { Component,  } from "react";
import API from '../utils/API';
import Manga from '../Manga/Manga';

class AllMangasConatiner extends Component{
    state = {
        mangas: []
    }

    componentDidMount(){
    this.getMangas();
    }

     getMangas(){
        API.getAll()
        .then(res => this.setState({ mangas: res}))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="row container d-flex main-container row-cols-5 p-3 m-auto w-100">
                <Manga mangas={this.state.mangas} />
            </div>
        )
    }
    
}

export default AllMangasConatiner;