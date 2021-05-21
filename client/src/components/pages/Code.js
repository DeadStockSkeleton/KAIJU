import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-textmate";
import { debounce } from "debounce";
import _ from 'lodash'

function Code(props) {
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState('html')
  const [fileContent, setFileContent] = useState('');
  function onChange(newValue) {
    setFileContent(newValue);
     _.debounce(function(){console.log(fileContent)}, 100)
    
  }
  useEffect(() => {
    getFiles();
  }, []);
  const id = props.match.params.id;
  async function getFiles() {
    await fetch(`/projects/${id}/code`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res)
        setFiles(res)
      });
  }
function getIcon(type){
  switch (type){
    case 'html':
      return (<i class="fab fa-html5"></i>)
    case 'css':
      return (<i class="fab fa-css3-alt"></i>)
    case 'js':
      return (<i class="fab fa-js"></i>)
    default:
      return 0;
  }
}

async function getFile(id, type){
  setFileType(type)
 await fetch(`/file/${id}/${type}`, {
   method: 'GET'
 }).then((data) => data.json())
 .then((res) => {
   setFileContent(res);
 });
}
  return (
    <>
      <div class="control-panel-wrapper w-100">
        <div class=" d-flex p-3">
          {fileType === 'html' ? (<small className=" text-muted">
            <i class="fas fa-play"></i> Live Server
          </small>) : (null)}
          
        </div>
      </div>
      <div className="editor-wrapper w-100 d-flex">
        <div className="editor">
          <AceEditor
            value={fileContent}
            width="100vw"
            mode={fileType}
            theme="textmate"
            onChange={onChange}
            name="editor"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
          />
        </div>
      </div>
      <div className="tab-wrapper fixed-bottom d-flex p-3 w-100 text-light">
        <small class="text-muted">
          <div
            class="spinner-border text-primary spinner-border-sm"
            role="status"
          ></div>
        </small>
        <div className="d-flex file-cont">
          {files ?(
          files.map((file) => (
            <small onClick={()=> getFile(file.uid,file.type)} className="mx-3 me-3 pe-3 file-tab">{getIcon(file.type)} {file.title +"."+file.type}</small>
          ))
        ):(null)}
        </div>
        <div className="current-project mx-3 pe-3 d-flex">
        
        <span></span>
        </div>
        
      </div>
    </>
  );
}

export default Code;
