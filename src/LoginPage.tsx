import  React , {useState} from "react";
import "./LoginPage.css";
import CSS from 'csstype';
import { useForm } from "react-hook-form";
import { useHistory, HashRouter as Router, Route, Link, Switch,RouteComponentProps } from 'react-router-dom'

type Person = {
  name: string;
};


interface LogButton {color : string  , inputText : string , clickOk : Boolean }
const initialButton : LogButton = {color : "blue" , inputText : "login", clickOk : true};


type PressButton = {type : "PressButton" }; 
type Msg = PressButton

function updateButton(state : LogButton, msg : Msg) {
  switch (state.color) {
    case "blue":
      const newState = {color : 'grey',inputText: 'wait', clickOk : false};
      return newState;
    case "grey":
      return initialButton;
    default:
      throw new Error();
  }
}

export const FormPerson = () => {
  const [state, dispatch] = React.useReducer(updateButton, initialButton);
 
  

  const { register, handleSubmit } = useForm<Person>();

  const onSubmit = (data: Person) => {
    console.log("data", data);
  };

  const buttonStyle : CSS.Properties = {
    backgroundColor : state.color ,
  };

  const [aname, setInputValue] = useState<string>("vide");
  var http = new XMLHttpRequest();
  var url = 'http://192.168.1.32:8080/allspeakers';
 // var url = 'http://127.0.0.1:8080/allspeakers';
  
  const history = useHistory();
  const handleRoute = () =>{ 
    history.push("/foo");
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    http.send(JSON.stringify({  "name": aname }));
  }
  
  return (
<div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="App">
      <header className="App-header">
        <p>
        Welcome to Chrono Team 
        </p>
 
     
      <div className="field">
        <label htmlFor="name">Name</label>


        <input
            type="text"
            value={aname}
            onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setInputValue(ev.target.value)}
        />

      </div>
      <button style={buttonStyle}  type="submit" onClick= {handleRoute}>Log in </button>   
      </header>
      </div>
    </form>
    </div>
  )
}



