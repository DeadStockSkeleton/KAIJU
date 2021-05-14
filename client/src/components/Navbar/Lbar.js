import React, { Component, PropTypes } from 'react';
import Account from './Account';
class Lbar extends Component {
    state = {
        searchType: 'Username'
    }

    handleChange = (event) => {
        this.setState({ searchType: event.target.value });
      };

  render() {return (
    <div className=" d-flex search-container col">
      <form class="search-form w-50 mx-auto">
        <label class="form-control search-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center">
          <select onChange={this.handleChange}
            class="form-select form-select-sm search-select"
          >
            <option value="Username">@</option>
            <option value="Projects">/</option>
            <option value="Code">#</option>
          </select>
          <input
            type="text"
            class="form-control text-light search-input input-sm"
            placeholder={"Search "+this.state.searchType}
            autocapitalize="off"
            spellcheck="false"
            autocomplete="off"
          />

          <div class="Box position-absolute overflow-hidden jump-to-suggestions js-jump-to-suggestions-container d-none"></div>
        </label>
      </form>

      
    </div>
  );}
  
}

export default Lbar;
