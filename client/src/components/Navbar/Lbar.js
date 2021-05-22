import React, { Component } from 'react';
import Script from '../utils/script';
class Lbar extends Component {
  constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
    state = {
        searchType: 'Projects',
        results: []
    }
    escFunction(event){
      if(event.keyCode === 13) {
        const query = event.target.value;
         fetch('/search/projects', {
          method: 'POST',
          body: JSON.stringify({query}),
          headers: { 'Content-Type': 'application/json' },
        }).then((res)=>{
          
          return res.json()
        })
      }
    }
    componentDidMount(){
      document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount(){
      document.removeEventListener("keydown", this.escFunction, false);
    }
    handleChange = (event) => {
        this.setState({ searchType: event.target.value });
      };

      

      logout = () => {
        Script.Logout()
      }

  render() {return (
      <>
    <div className=" d-flex search-container  col">
      <div class="search-form mx-auto">
        <label class="form-control search-wrapper p-0 position-relative d-flex">
          <select disabled onChange={this.handleChange}
            class="form-select form-select-sm search-select"
          >

            <option value="Projects">/</option>
            
          </select>
          <input disabled
            type="text"
            onChange={this.escFunction}
            class="form-control disabled text-light search-input"
            placeholder={"Coming Soon... "}
            autocapitalize="off"
            spellcheck="false"
            autocomplete="off"
          />

        </label>
      </div>
<button onClick={this.logout} class="text-danger btn">Logout</button>
      
    </div>
    </>
  );}
  
}

export default Lbar;
