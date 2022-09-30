import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          {/* <News key="general" pageSize={5} country="in" category="general" /> */}
          <Routes>
            <Route exact path="/" element={<News  key="general"  pageSize={this.pageSize}  category="general"></News>}/>
            <Route exact path="/business" element={<News  key="business"  pageSize={this.pageSize}  category="business"></News>}/>
            <Route exact path="/entertainment" element={<News  key="entertainment"  pageSize={this.pageSize}  category="entertainment"></News>}/>
            <Route exact path="/general" element={<News  key="general"  pageSize={this.pageSize}  category="general"></News>}/>
            <Route exact path="/health" element={<News  key="health"  pageSize={this.pageSize}  category="health"></News>}/>
            <Route exact path="/science" element={<News  key="science"  pageSize={this.pageSize}  category="science"></News>}/>
            <Route exact path="/sports" element={<News  key="sports"  pageSize={this.pageSize}  category="sports"></News>}/>
            <Route exact path="/technology" element={<News  key="technology"  pageSize={this.pageSize}  category="technology"></News>}/>
          </Routes>

        </BrowserRouter>
      </div>
    )
  }
}
