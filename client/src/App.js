import React, { Component,  } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';
import Favorites from './components/pages/Favorites';
import Downloads from './components/pages/Downloads';
import MangaPage from './components/pages/MangaPage';
import API from './components/utils/API';
class App extends Component{
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

  render(){return (
      <><Router>
      <Sidebar/>
      <div className="container">
        <Navbar/>
        <div className="container p-4 main">
        
          <Route exact path='/' component={Home}/>
          <Route exact path='/discover' component={Discover}/>
          <Route exact path='/favorites' component={Favorites}/>
          <Route exact path='/downloads' component={Downloads}/>
          <Route exact path={window.location.indexOf = '/manga/'} component={MangaPage}/>
          
            {this.state.mangas.map(manga => (
                <Route exact path={'/manga/'+manga.id} component={MangaPage}/>   
               ))}
        </div>
      </div>
      </Router>
      </>
      
    );}
    
  }
  
  export default App;
  