import { Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import ProjectModal from '../Modal/NewProjectModal';
import Script from '../utils/script';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify'
function ProjectsLibrary(props){      
  const [showModal, setShowModal] = useState(false)
const [projects, setProjects] = useState([])
const [selected, setSelected] = useState("")
const [search, setSearch] = useState('');
  const openModal = () => {
    setShowModal(prev => !prev)
  }
function getProject(id){
 fetch(`/projects/${id}`, {
   method: 'GET'
 }).then((res => res.json())).then((data)=>{
  setSelected(data);
})

}

async function getProjects(){
await fetch('/projects', {
      method: 'GET',
    }).then((res => res.json())).then((data)=>{
      setSearch(data)
      setProjects(data);
    })
}
 

  async function warning(id){
    const key = 'delete ' + selected.title
    var answer = prompt(`Type "${key}" to delete project`);

    if (answer === key){
      await fetch('/delete/project/'+id, {
        method: 'GET'
      }).then((res) => {
        if (res.status === 200) {
          return res.json()
        }else{
          toast.error('Failed to delete project 🥲')
        }
      }).then(async (data)=>{
        if (data){
  await fetch('/delete/project/'+id,{
    method: 'DELETE'
  }).then(()=>{
    toast.info('Project deleted')
    return window.location.href = "/";
  })
        }
      });
    }else{
      
    }return;
  }
  function handleSearch(query){
    const results = [];
    for (let i = 0;  i < search.length; i++){
      if (search[i].title.includes(query)){
        results.push(search[i])
      }
      setProjects(results);
      
    }
  } useEffect(()=> {
    getProjects();
  }, [])
    return (
          <>   
          <ToastContainer /> 
          <ProjectModal showModal={showModal} setShowModal={setShowModal} />

          <div class="projects-library-wrapper">
  <div class="col-md-3 project-directory text-light">
  <div class="row project-search">
  <label class="form-control search-wrapper m-3 p-0 position-relative d-flex">
          
          <input onKeyUp={((e)=>{handleSearch(e.target.value)})}
            type="text"
            class="form-control text-light search-input"
            placeholder="Search for Project"
            autocapitalize="off"
            spellcheck="false"
            autocomplete="off"
          /><button class="btn text-light add-btn" onClick={openModal}>+</button>
        </label>
        
  </div>
  <div class="row project-tabs">
  <div class="list-group project-tabs p-3 w-100">
    {projects.length ? (projects.map((project, i)=> (
    <button key={project.id} type="button" onClick={()=>{getProject(project.id)}} class="list-group-item list-project project-link list-group-item-action">
    {project.title}
  </button>
  ))) : (<small class="text-center text-muted m-3">No Projects </small>)}
</div>
  </div>
  </div>
  <div className="row-col-md-9 g-0 w-100 project-panel p-3">
    {selected ? (<div className="row g-0">
<nav class="navbar w-100">
  <div class="container-fluid">
   <h1 className="text-light display-3">{selected.title}</h1>
  <button onClick={(()=>{warning(selected.id)})} class="btn text-light"><i class="fas fa-trash"></i></button>
  </div>    
  <Link to={"/projects/"+selected.id + "/code"} class="btn bg-primary px-5 text-light">start</Link>

</nav>
<div className="row project-desc w-100 rounded p-3 container-fluid project-preview m-3 text-light">
    <p>{selected.desc}</p>
</div>

</div>) : (<small class="text-muted m-5">No Project Selected</small>)}


  </div>
</div>
          </>
          
        );
        
      }
      
      export default ProjectsLibrary;