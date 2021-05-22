import Script from "../utils/script";
import React, { useState } from "react";
function NewFileModal({ showModal, setShowModal, id }) {
  const [fileName, setFileName] = useState("index");
  const [fileType, setFileType] = useState("html");
  function handleFileName(fileVal) {
    setFileName(fileVal);
  }

  function handleType(typeVal) {
    setFileType(typeVal);
  }

  function createFile(id){
    const file = {
        title: fileName,
        type: fileType
    }

    Script.createFile(file, id)
  }
  return (
    <>
      {showModal ? (
        <div class="modal-bg">
          <div className="card newFileModal w-50 p-4">
            <nav class="navbar w-100">
              <div class="container-fluid text-muted">

                <small>project: </small>
              </div>
            </nav>
            <div class="container text-light">
            <form>
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
            <option value="js">.js</option>
          </select>

          <div class="Box position-absolute overflow-hidden jump-to-suggestions js-jump-to-suggestions-container d-none"></div>
        </label>
      </form>
            </div>

            <div className="d-grid gap-2 d-md-block container mt-3">
            <button onClick={(()=>{createFile(id)})} type="button" class="btn btn-primary btn-sm">create {fileName}<small>{"."+fileType}</small></button>
<button type="button" class="btn btn-outline-secondary btn-sm mx-3">cancel</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default NewFileModal;
