import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () =>{
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter basename="/News-App">
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          {/* <News setProgress={setProgress} key="general" pageSize={5} country="in" category="general" /> */}
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general"></News>} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business"></News>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment"></News>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general"></News>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health"></News>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science"></News>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports"></News>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology"></News>} />
          </Routes>

        </BrowserRouter>
      </div>
    )
}

export default App;