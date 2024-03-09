import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import jsPDF from 'jspdf';
export default function Textform(props) {
  
  const [text, setText] = useState("");
  const handleupclick = () => {
    console.log("upper case was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    if(text!=="")
    {
      props.ShowAlert("coverted to upper case sucessfully","success");
    }
    
  };
  const handleonchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleuplower = () => {
    console.log("on lower");
    let newtext = text.toLowerCase();
    setText(newtext);
    if(text!=="")
    {
      props.ShowAlert(" coverted to lower case sucessfully","success");
    }
  };
  const textRef = useRef(null);
  function handleCopy() {
    // Select the text in the textRef element
    textRef.current.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");
    // Deselect the text
    window.getSelection().removeAllRanges();
    if(text!=="")
    {
      props.ShowAlert(" text copied","success");
    }
  }

  const handleConvertToPDF = () => {
    const doc = new jsPDF();
    if(text!=="")
    {
      doc.text(text, 10, 10);
      doc.save("selected-text.pdf");
      props.ShowAlert("Pdf downloaded","success");
    }
    else
    {
      props.ShowAlert("There is no text to download","warning");
    }
    
  }
  // const textareaRef = useRef(null);
  const handleSelectAll = () => {
    textRef.current.select();
  }
  const rextraspace=()=>
  {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    if(text!=="")
    {
      props.ShowAlert("Extra space removed","success");
    }
  }
  const clear=()=>
  {
    setText("");
    if(text!=="")
    {
      props.ShowAlert("All data cleared","success");
    }
    else
    {
      props.ShowAlert("No data available to clear","warning");
    }
  }
  return (
    <>
      <div className="mt-4" style={{color:props.m==='dark'?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="input-group mt-4">
          <textarea
            className="form-control border border-5"
            style={{background:props.m==='dark'?"black":"white",color:props.m==='dark'?"white":"black"}}
            aria-label="With textarea"
            value={text}
            onChange={handleonchange}
            rows="13"
            cols="20"
            ref={textRef}
            autoComplete="on"
            spellCheck="true"
            autoCapitalize="true"
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleupclick}>
          Convert to upercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleuplower}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary m-2" onClick={handleConvertToPDF}>
          Pdf convertor
        </button>
        <button className="btn btn-primary m-2" onClick={handleSelectAll}>Select All</button>
        <button className="btn btn-primary m-2" onClick={rextraspace}>Remove Extra space</button>
        <button className="btn btn-primary m-2" onClick={clear}>clear All</button>
      </div>
      <div className="conatiner" style={{color:props.m==='dark'?"white":"black"}}>
      <h1 className="mt-2">Summary of your text</h1>
      <div className="fs-3" id="wcount">words:{text.split(" ").filter((element)=>{return element.length!==0}).length}</div>
      <div className="fs-3" id="count">characters:{text.length}</div>
      <h3>Preview of text:</h3>
      <div className="fs-3">{text.length>0?text:"Enter text in textbox above to preview it"}</div>
      </div>
    </>
  );
}
Textform.prototype = {
  heading: PropTypes.string,
};
Textform.defaultProps = {
  heading: "Enter your text to analyze below",
};
