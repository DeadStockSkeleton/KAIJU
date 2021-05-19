import Script from '../utils/script';
import React, { useState } from "react";
function NewProjectModal({showModal, setShowModal}){
const [title, setTitle] = useState({
title: 'Project Tile',
})
const [desc, setDesc] = useState('Project desc...')

const [fileName, setFileName] = useState('index')
const [fileType, setFileType] = useState('html')
function createProject(){
    const body = {
        title: title,
        desc: desc


    }
    const file = {
        title: fileName,
        type: fileType
    }

    console.log(desc)

    if (title && fileName){
     Script.createProject(body, file) 
    //  Script.createFile(file)  
    }else if (title){
        Script.createProject(body) 
    }else{
        return;
    }
}
function handleProject(titleVal){
    if (titleVal.length > 0){
        setTitle(titleVal);
    console.log(title);
    }
    
}

function handleDesc(descVal){
    if (descVal.length > 0){
        setDesc(descVal)
        console.log(desc);
    }
}

function handleFileName(fileVal){
    setFileName(fileVal);
}

function handleType(typeVal){
    setFileType(typeVal)
}
    return (
          <>
          {showModal ? 

          (<div class="modal-bg">
              <div className="card newProjectModal p-4">
                  <div className="container">
                  <nav class="navbar">
</nav> <div class="container">

          <input onKeyUp={((e)=>{handleProject(e.target.value)})} autoComplete="off" placeholder="Project Title" class="text-light project-title">
              
          </input>
          <textarea onKeyUp={((e)=>{handleDesc(e.target.value)})} className="w-100 mt-3 text-light project-desc" placeholder="Project Desc..."></textarea>
          
          <form class="search-form">
        <label class="form-control search-wrapper p-0 position-relative d-flex">
          
          <input 
          onKeyUp={((e)=>{handleFileName(e.target.value)})} 
            type="text"
            class="form-control text-light search-input"
            placeholder="index"
            autocapitalize="off"
            spellcheck="false"
            autocomplete="off"
          /><select 
          onChange={((e)=>{handleType(e.target.value)})}
            class="form-select form-select-sm type-select"
          >
            <option value="html">.html</option>
            <option value="Projects">.css</option>
            <option value="Post">.js</option>
          </select>

          <div class="Box position-absolute overflow-hidden jump-to-suggestions js-jump-to-suggestions-container d-none"></div>
        </label>
      </form>
          <div class='d-flex'>
              <button onClick={() =>{createProject()}} class="btn m-2 btn-primary">Create</button>
          </div>


        
  </div>
                  </div>
              </div>
          </div>) : (null)}
          </>
          
        );
        
      }
      
      export default NewProjectModal;