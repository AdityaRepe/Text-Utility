import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLoClick = ()=>{
      //console.log("UpperCase was clicked"+ text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase!","success");
  }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
      let newText='';
      setText(newText);
      props.showAlert("Cleared text!","success");
    }

    const handleCopy= ()=> {
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied Text to clipboard!","success");
    }

    const handleExtraSpaces = ()=> {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces!","success");
    }

    const [text, setText]=useState(''); 
  return (
    <>
    <div>
    <form>
    <div className="form-group" style={{color: props.mode==='dark'?'white':'#635f5f'}}>
        <h1>{props.heading}</h1>
        <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#635f5f'}} id="myBox" rows="9"></textarea>
    </div>
    </form>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#635f5f'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in text-area to preview here"}</p>
    </div>
    </>
  )
}
