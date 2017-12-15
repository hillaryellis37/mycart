import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <FacebookLogin
//     appId="1088597931155576"
//     autoLoad={true}
//     fields="name,email,picture"
//     onClick={console.log('fb')}
//     callback={responseFacebook} 
//     icon="fa-facebook"
//   />,
//   document.getElementById('demo')
// );