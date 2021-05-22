import Script from '../utils/script';
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify'
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


     if (body){
         fetch('/project', {
            method: 'POST',
            body:JSON.stringify({body, file}),
            headers: { 'Content-Type': 'application/json' },
          }).then((res) => {
            if (res.status === 200){
                toast.success('Project created! 🥳')
                return window.location.href = '/'
            }else{
                toast.error('Project not created! Please try again')

            }
            
          })
     }else{
         toast.error('Uh Oh, my bad! Please try again 😖')
     }
     
    
}
function handleProject(titleVal){
    if (titleVal.length > 0){
        setTitle(titleVal);
    }
    
}

function handleDesc(descVal){
    if (descVal.length > 0){
        setDesc(descVal)
    }
}

function handleFileName(fileVal){
    setFileName(fileVal);
}

function handleType(typeVal){
    setFileType(typeVal)
}

function closeModal(){
    setShowModal(false)
}
    return (
          <>
          {showModal ? 

          (<><ToastContainer />
          <div class="modal-bg">
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
            <option value="css">.css</option>
          </select>

          <div class="Box position-absolute overflow-hidden jump-to-suggestions js-jump-to-suggestions-container d-none"></div>
        </label>
      </form>
          <div class='d-flex'>
              <button onClick={() =>{createProject()}} class="btn m-2 btn-primary">Create</button>
              <button  class="btn btn-outline-secondary btn-sm m-2" onClick={(()=>{closeModal()})}>cancel</button>
          </div>


        
  </div>
                  </div>
              </div>
          </div></>
              ) : (null)}
          </>
          
        );
        
      }
      
      export default NewProjectModal;