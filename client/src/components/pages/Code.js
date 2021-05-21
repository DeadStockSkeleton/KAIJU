import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import _ from "lodash";
import Editor, { useMonaco } from "@monaco-editor/react";
import NewWindow from 'react-new-window'
import parse from 'html-react-parser';
function Code(props) {
  const monaco = useMonaco();
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState("html");
  const [fileContent, setFileContent] = useState("");
  const [live, setLive] = useState(false);
  const [selectedFile, setSelectedFile]= useState(null)

  function onChange(newValue) {
    setFileContent(newValue);
    
  }
  

 
  useEffect(() => {
    getFiles();
  }, []);
  const id = props.match.params.id;
  function getFiles() {
     fetch(`/projects/${id}/code`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
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

  async function startServer(){
    setLive(!live);
  }
  async function getFile(id, type) {
    setFileType(type);
    if(type === 'html'){
      setSelectedFile(id)
    }
    
    await fetch(`/file/${id}/${type}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        setFileContent(res);
      });
  }
  return (
    <>
    {live ? (<NewWindow>
        {parse(fileContent)}
      </NewWindow>) : (null)}
      <div class="control-panel-wrapper w-100">
        <div class=" d-flex p-3 bg-light">
          {fileType === "html" ? (
            <button onClick={()=>{startServer()}} className={live ? ("text-dark btn btn-sm") : ("text-muted btn btn-sm")}>
              {live ? (<i class="fas fa-pause"></i>) : (<i class="fas fa-play"></i>)} Live Server
            </button>
          ) : null}
        </div>
      </div>
      <div className="editor-wrapper w-100 d-flex">
        <div className="editor p-3">
          <Editor onChange={onChange}
            height="90vh"
            width="100vw"
            defaultLanguage={getLang(fileType)}
            value={fileContent}
          />
        </div>
      </div>
      <div className="tab-wrapper fixed-bottom d-flex p-3 w-100 text-dark bg-light">
        <small class="text-muted">
          <div
            class="spinner-border text-primary spinner-border-sm"
            role="status"
          ></div>
        </small>
        <div className="d-flex file-cont">
          {files
            ? files.map((file) => (
                <small
                  onClick={() => getFile(file.uid, file.type)}
                  className="mx-3 me-3 pe-3 file-tab"
                >
                  {getIcon(file.type)} {file.title + "." + file.type}
                </small> 
              ))
            : null}
        </div>
        <div className="current-project bg-light mx-3 pe-3 d-flex">
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Code;
