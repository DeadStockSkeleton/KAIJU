import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import NewWindow from "react-new-window";
import parse from "html-react-parser";
import NewFileModal from "../Modal/NewFileModal";
import Script from '../utils/script'
import { Link } from "react-router-dom";
function Code(props) {
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState('html');
  const [fileContent, setFileContent] = useState("");
  const [live, setLive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [html, setHtml] = useState(fileContent);
  const [css, setCss] = useState(fileContent);
  const [js, setJs] = useState(fileContent);
  const [currentProj, setProj] = useState('')
  function save(file, type, content){
    Script.saveFile(file, type, content)
  }
 
  function onChange(newValue){
    
      setFileContent(newValue);
    save(selectedFile, fileType, fileContent)
    switch (fileType){
      case "html":
        return setHtml(newValue)
      case "css":
        return setCss(newValue)
      case "js":
        return setJs(newValue)
      default:
        return 0;
    }
  }
const id = props.match.params.id;
  useEffect(() => {
    getFiles();
    getProject(id)
    if (files.length > 0){
      getFile(files[0].uid, files[0].type )
    }
    
  }, []);
  
  function getFiles() {
    fetch(`/projects/${id}/code`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setFiles(res);
      });
  }
  function getIcon(type) {
    switch (type) {
      case "html":
        return <i class="fab fa-html5"></i>;
      case "css":
        return <i class="fab fa-css3-alt"></i>;
      case "js":
        return <i class="fab fa-js"></i>;
      default:
        return 0;
    }
  }
  function getProject(id){
    fetch(`/projects/${id}`, {
      method: 'GET'
    }).then((res => res.json())).then((data)=>{
     setProj(data)
   })
   
   }
  function getLang(type) {
    switch (type) {
      case "html":
        return "html";
      case "css":
        return "css";
      case "js":
        return "javascript";
      default:
        return 0;
    }
  }

  async function startServer() {
    setLive(!live);
  }
  async function getFile(id, type) {
    setFileType(type);
    setSelectedFile(id);

    await fetch(`/file/${id}/${type}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setFileContent(res);
        switch (type) {
          case "html":
        return setHtml(res)
      case "css":
        return setCss(res)
      case "js":
        return setJs(res)
      default:
        return 0;
        }
      });
  }
 
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  
  return (
    <>
      <NewFileModal
      currentProj={currentProj}
        id={props.match.params.id}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {live ? <NewWindow title="Live Code">{parse(
        `<style>${css}</style>${html}<script>${js}</script>`
      )}</NewWindow> : null}
      <div class="control-panel-wrapper w-100">
        <div class=" d-flex p-3 bg-light">
          {files.length === 6 ? null : (
            <button onClick={openModal} className="btn newFileBtn control-panel-btn">
              <i class="fas fa-plus"></i>
            </button>
          )}
          
            <button
              onClick={() => {
                startServer();
              }}
              className={
                live ? "text-dark btn btn-sm" : "text-muted btn btn-sm"
              }
            >
              {live ? (
                <i class="fas fa-pause"></i>
              ) : (
                <i class="fas fa-play"></i>
              )}
            </button>
        
        </div>
      </div>
      <div className="editor-wrapper w-100 d-flex">
        <div className="editor p-3">
          <Editor
            onChange={onChange}
            height="90vh"
            width="100vw"
            language={getLang(fileType)}
            value={fileContent}
          />
        </div>
      </div>
      <div className="tab-wrapper fixed-bottom d-flex p-3 w-100 text-dark bg-light">
        <div className="d-flex file-cont">
          {files
            ? files.map((file) => (
                <small
                  onClick={() => getFile(file.uid, file.type)}
                  className={
                    selectedFile === file.uid
                      ? "mx-3 me-3 pe-3 file-tab active-file"
                      : "mx-3 me-3 pe-3 file-tab"
                  }
                >
                  {getIcon(file.type)} {file.title + "." + file.type}
                </small>
              ))
            : null}
        </div>
        <div className="current-project bg-light mx-3 pe-3 d-flex">

          <Link to="/" class="text-dark"><small><i class="fas fa-home"></i></small></Link>
        </div>
      </div>
    </>
  );
}

export default Code;
