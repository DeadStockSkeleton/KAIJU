import React, { Component } from 'react';

class Lbar extends Component {
    state = {
        searchType: 'Projects'
    }

    handleChange = (event) => {
        this.setState({ searchType: event.target.value });
      };

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
