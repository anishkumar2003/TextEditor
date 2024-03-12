import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import jsPDF from "jspdf";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [fontStyle, setFontStyle] = useState("normal");

  const handleupclick = () => {
    console.log("upper case was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    if (text !== "") {
      props.ShowAlert("converted to uppercase successfully", "success");
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
    if (text !== "") {
      props.ShowAlert("converted to lowercase successfully", "success");
    }
  };

  const textRef = useRef(null);

  function handleCopy() {
    textRef.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    if (text !== "") {
      props.ShowAlert("text copied", "success");
    }
  }

  const handleConvertToPDF = () => {
    const doc = new jsPDF();
    const textLines = doc.splitTextToSize(text, 180);
    if (textLines.length > 0) {
      doc.text(textLines, 10, 10);
      doc.save("selected-text.pdf");
      props.ShowAlert("Pdf downloaded", "success");
    } else {
      props.ShowAlert("There is no text to download", "warning");
    }
  };

  const handleSelectAll = () => {
    textRef.current.select();
  };

  const rextraspace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    if (text !== "") {
      props.ShowAlert("Extra space removed", "success");
    }
  };

  const clear = () => {
    setText("");
    if (text !== "") {
      props.ShowAlert("All data cleared", "success");
    } else {
      props.ShowAlert("No data available to clear", "warning");
    }
  };

  useEffect(() => {
    if (fontStyle === "bold") {
      textRef.current.style.fontWeight = "bold";
    } else if (fontStyle === "italic") {
      textRef.current.style.fontStyle = "italic";
      textRef.current.style.fontWeight = "normal";
    } else if (fontStyle === "underline") {
      textRef.current.style.textDecoration = "underline";
      textRef.current.style.fontWeight = "normal";
    } else {
      textRef.current.style.fontWeight = "normal";
      textRef.current.style.fontStyle = "normal";
      textRef.current.style.textDecoration = "none";
    }
  }, [fontStyle]);

  return (
    <>
      <div
        className="mt-4"
        style={{ color: props.m === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="input-group mt-4">
          <textarea
            className="form-control border border-5"
            style={{
              background: props.m === "dark" ? "black" : "white",
              color: props.m === "dark" ? "white" : "black",
              fontWeight: fontStyle === "bold" ? "bold" : "normal",
              fontStyle: fontStyle === "italic" ? "italic" : "normal",
              textDecoration: fontStyle === "underline" ? "underline" : "none",
            }}
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
          Convert to uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleuplower}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary m-2" onClick={handleConvertToPDF}>
          PDF Converter
        </button>
        <button className="btn btn-primary m-2" onClick={handleSelectAll}>
          Select All
        </button>
        <button className="btn btn-primary m-2" onClick={rextraspace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary m-2" onClick={clear}>
          Clear All
        </button>
        <select
          name="textStyle"
          id="TextFonts"
          style={{
            backgroundColor: "#1891ed",
            padding: "5px",
            margin: "5px 2px",
            fontSize: "1rem",
            textAlign: "center",
            borderRadius: "5px",
            color: "white",
          }}
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
        >
          <option value="normal">None</option>
          <option value="bold">Bold</option>
          <option value="italic">Italic</option>
          <option value="underline">Underline</option>
        </select>
      </div>
      <div
        className="container"
        style={{ color: props.m === "dark" ? "white" : "black" }}
      >
        <h1 className="mt-2">Summary of your text</h1>
        <div className="fs-3" id="wcount">
          Words:{" "}
          {text.split(" ").filter((element) => element.length !== 0).length}
        </div>
        <div className="fs-3" id="count">
          Characters: {text.length}
        </div>
        <h3>Preview of text:</h3>
        <div className="fs-3">
          {text.length > 0
            ? text
            : "Enter text in the textbox above to preview it"}
        </div>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string,
  m: PropTypes.string,
  ShowAlert: PropTypes.func,
};

Textform.defaultProps = {
  heading: "Enter your text to analyze below",
};
