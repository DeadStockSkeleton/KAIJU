import React, { Component } from 'react';
import Script from '../utils/script';
class Lbar extends Component {
    state = {
        searchType: 'Projects',
        results: []
    }

    handleChange = (event) => {
        this.setState({ searchType: event.target.value });
      };

      search = (e)=>{
        const query = e.target.value;
        Script.searchProjects(query)


      }

  render() {return (
      <>
    <div className=" d-flex search-container  col">
      <form class="search-form mx-auto">
        <label class="form-control search-wrapper p-0 position-relative d-flex">
          <select onChange={this.handleChange}
            class="form-select form-select-sm search-select"
          >

            <option value="Projects">/</option>
            
          </select>
          <input
            type="text"
            onChange={this.search}
            class="form-control text-light search-input"
            placeholder={"Search "+this.state.searchType}
            autocapitalize="off"
            spellcheck="false"
            autocomplete="off"
          />

        </label>
      </form>

      
    </div>
    </>
  );}
  
}

export default Lbar;
