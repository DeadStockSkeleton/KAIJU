import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-textmate";
function onChange(newValue) {
  console.log("change", newValue);
}
function Code(props){
  const id = props.match.params.id
    return (
          <>
          <div class="control-panel-wrapper w-100">
      <div class=" d-flex">
      <button className="btn text-muted"><i class="fas fa-play"></i> Live Server</button>
      </div>
          </div>
          <div className="editor-wrapper w-100 d-flex">
<div className="editor">
<AceEditor height="100vh" width="100vw"
    mode="html"
    theme="textmate"
    onChange={onChange}
    name="editor"
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    }}
  />
</div>
          </div>
          <div className="tab-wrapper fixed-bottom d-flex p-3 w-100 text-light">
<small class="text-muted"><div class="spinner-border text-primary spinner-border-sm" role="status">
</div>  saving... </small>
          </div>
          </>
          
        );
        
      }
      
      export default Code;