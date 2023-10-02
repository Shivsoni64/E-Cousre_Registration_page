import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

function check(){
    let x = document.forms["RegForm"]["fname"].value;
    if(x ==" "){
        alert("Please enter your name");
        return false;
    }
}
