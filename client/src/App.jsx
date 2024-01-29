import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
/* File Name: App.jsx
Student's Name: Vidit Rawat
Student;s Id: 301391326
Date: 28th January 2024 */
const App = () => {
  return (
    <Router>
      
        <MainRouter />
     
    </Router>
  );
};

export default App;
