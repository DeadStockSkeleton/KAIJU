import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import _ from "lodash";
import Editor, { useMonaco } from "@monaco-editor/react";
import NewWindow from "react-new-window";
import parse from "html-react-parser";
import NewFileModal from "../Modal/NewFileModal";
import Script from '../utils/script'
function Code(props) {
  const monaco = useMonaco();
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState(null);
  const [fileContent, setFileContent] = useState("");
  const [live, setLive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [saving, setSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [html, setHtml] = useState(fileContent);
  const [css, setCss] = useState(fileContent);
  const [js, setJs] = useState(fileContent);
  function save(file, type, content){
    Script.saveFile(file, type, content)
  }
  function onChange(newValue) {
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

  async function startServer() {
    setLive(!live);
    filterHTML(fileContent)
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
      });
  }
  function filterHTML(file){
    const filtered = file.match(/<head[^>]*>((.|[\n\r])*)<\/head>/im)
  console.log(filtered)
  }
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  
  return (
    <>
      <NewFileModal
        id={props.match.params.id}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {live ? <NewWindow title="Live Code">{parse(
        `<style>${css}</style>${html}<script>${js}</script>`
      )}</NewWindow> : null}
      <div class="control-panel-wrapper w-100">
        <div class=" d-flex p-3 bg-light">
          {files.length === 3 ? null : (
            <button onClick={openModal} className="btn control-panel-btn">
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
          
          <button
            onClick={() => {
              getFiles();
            }}
            className="btn float-end control-panel-btn"
          >
            <i class="fas fa-wrench"></i>
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
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Code;
