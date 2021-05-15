import { Link } from "react-router-dom";
function ProjectsLibrary(props){
    return (
          <>
          <div class="projects-library-wrapper">
  <div class="col-md-3 project-directory text-light">
  <div class="row project-search">
  <label class="form-control search-wrapper m-3 p-0 position-relative d-flex">
          
          <input
            type="text"
            class="form-control text-light search-input"
            placeholder="Search for Project"
            autocapitalize="off"
            spellcheck="false"
            autocomplete="off"
          />
        </label>
  </div>
  <div class="row project-tabs">
  <div class="list-group project-tabs w-100">
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action select-active" aria-current="true">
    Project #1
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
  <button type="button" class="list-group-item list-project rounded-0 list-group-item-action">
    Demo
  </button>
</div>
  </div>
  </div>
  <div className="col-md-9 w-100 bg-dark">
<div className="row m-3">
    <small className="text-muted">Owner: <Link to={"/u/"+props.id}>
               Username
              </Link></small>
</div>
<div className="row container project-preview m-3 text-light">
    <h1>Project <span class="badge bg-secondary">Private</span></h1>
    
</div>
  </div>
</div>
          </>
          
        );
        
      }
      
      export default ProjectsLibrary;