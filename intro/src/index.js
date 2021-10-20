import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// npm install --save reactstrap react react-dom komutuyla yüklediğimiz reactstrap kütüphanesini import ediyoruz
//Bootstrap ın react versiyonu gibi düşünebiliriz
import "bootstrap/dist/css/bootstrap.min.css";

//Alertify.js i ekliyorum
import "alertifyjs/build/css/alertify.css";


//Ana Componentin tanımlandığı dosyadır index.js
//index.html içerisinde ki root id li div e App componenti ni yerleştiriyor
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
