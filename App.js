import React from "react";
import './App.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prop from './components/Prop';

function App() {
  return (
    <div className="App">
      <div className='title'>
          <h1 className='text-center'>All Netflix Series Download From Here</h1>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-12 col-md-6 col-lg-3 m-0 p-0'>
                <Prop
                  img = 'img/net1.jpg'
                  name = 'Netflix'
                  desc = 'This Is Netflix Series'
                  btn = 'Watch Now'
                  link = 'https://www.netflix.com/in/title/81231974'
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3 m-0 p-0'>
                <Prop
                  img = 'img/net2.jpg'
                  name = 'Netflix'
                  desc = 'This Is Netflix Series'
                  btn = 'Watch Now'
                  link = 'https://www.netflix.com/in/title/80057281'
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3 m-0 p-0'>
                <Prop
                  img = 'img/net3.jpg'
                  name = 'Netflix'
                  desc = 'This Is Netflix Series'
                  btn = 'Watch Now'
                  link = 'https://www.netflix.com/in/title/81183492'
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3 m-0 p-0'>
                <Prop
                  img = 'img/net4.jpg'
                  name = 'Netflix'
                  desc = 'This Is Netflix Series'
                  btn = 'Watch Now'
                  link = 'https://www.netflix.com/in/title/81116486'
                />
              </div>
          </div>

          <div className='row mb-5'>
              <div className='col-12 col-md-6 col-lg-3 m-0 p-0'>
                <Prop
                  img = 'img/net5.jpg'
                  name = 'Netflix'
                  desc = 'This Is Netflix Series'
                  btn = 'Watch Now'
                  link = 'https://www.netflix.com/in/title/81221372'
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3 m-0 p-0'>
                <Prop
                  img = 'img/net6.jpg'
                  name = 'Netflix'
                  desc = 'This Is Netflix Series'
                  btn = 'Watch Now'
                  link = 'https://www.netflix.com/in/title/81199145'
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3 m-0 p-0'>
                <Prop
                  img = 'img/net7.jpg'
                  name = 'Netflix'
                  desc = 'This Is Netflix Series'
                  btn = 'Watch Now'
                  link = 'https://www.netflix.com/in/title/81133092'
                />
              </div>
              <div className='col-12 col-md-6 col-lg-3 m-0 p-0'>
                <Prop
                  img = 'img/net8.jpg'
                  name = 'Netflix'
                  desc = 'This Is Netflix Series'
                  btn = 'Watch Now'
                  link = 'https://www.netflix.com/in/title/80214497'
                />
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;