import React from 'react';
import CSS from 'csstype';

interface State {color : string  , inputText : string }
const initialState : State = {color : "blue" , inputText : "you can speak"};

type PressButton = {type : "PressButton" }; 
type Msg = PressButton

function update(state : State, msg : Msg) {
    switch (state.color) {
      case "blue":
        const newState = {inputText: 'you\'re speaking', color : 'green'};
        return newState;
      case "green":
        return {color : "blue" , inputText : "you can speak"};
      default:
        throw new Error();
    }
  }

export const Foo = () => { {
  const [state, dispatch] = React.useReducer(update, initialState);
    /*
    ("speak" "blue") (clic =>) ("you're speaking" "green" )   (clic => ) ("finish" "blue")
    ("speak" "blue")           ("--- is speaking" , "red")               ("speak" "blue")
    */ 
   
  const buttonStyle : CSS.Properties = {
    backgroundColor : state.color ,
    fontSize: '30px',
    fontWeight: 200,
    padding: '13px 50px 13px',
    border: '3px solid black',
    cursor: 'pointer'
  };

  const tableStyle : CSS.Properties = {
      fontFamily: "arial, sans-serif",
      borderCollapse: "collapse",
      width: "100%"
    }

  const tdthStyle : CSS.Properties = {
      border: "1px solid #dddddd",
      textAlign: "left",
      padding: "8px"
  }
  
  const trStyle : CSS.Properties = {
     // tr:nth-child(even)
      backgroundColor: "#dddddd"
    }



    return (
      <html>
<body>
  <div> 
  <table style  = {tableStyle}>
  <tr>
    <th>Name</th>
    <th>Counter</th>
  </tr>
  <tr>
    <td style = { tdthStyle}>Alfreds Futterkiste</td>
    <td  style = { tdthStyle}></td>
  </tr>
  <tr>
    <td  style = { tdthStyle}>Francisco Chang</td>
    <td  style = { tdthStyle}></td>
  </tr>
  <tr>
    <td  style = { tdthStyle}>Ernst Handel</td>
    <td  style = { tdthStyle}></td>
  </tr>
  <tr>
    <td  style = { tdthStyle}>Helen Bennett</td>
    <td  style = { tdthStyle}></td>
  </tr>
  <tr>
    <td  style = { tdthStyle}>Yoshi Tannamuri</td>
    <td  style = { tdthStyle}></td>
  </tr>
  <tr>
    <td  style = { tdthStyle}>Giovanni Rovelli</td>
    <td  style = { tdthStyle}></td>
  </tr>
</table>



     </div>
<div >
        <button style={buttonStyle} onClick={() => dispatch({type : "PressButton"})}>{state.inputText}</button>
    </div>
   

   </body>
   </html>
   )}}