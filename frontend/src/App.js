
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My Blog</h1>
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/articles/:articleId" element={<ArticleList />} />
          My blog app
        </Routes>  
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
