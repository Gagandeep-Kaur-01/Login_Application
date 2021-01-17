import React from 'react';
import UserStore from './store/UserStore'
import LoginForm from './Form/LoginForm'
import InputField from './Form/InputField'
import SubmitButton from './Form/SubmitButton'
import './App.css';

class App extends React.Component {

  render() {
  return (
    <div className="">
     
      <LoginForm />
      
    </div>
  );
  }
}

export default App;
