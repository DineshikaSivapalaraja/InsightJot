
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Home from './pages/Home';
import About from './pages/About';
import ArticlePage from './pages/ArticlePage';
import ArticleList from './pages/ArticleList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          {/* navigate pages separately for different pages*/} 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* navigate about page*  */} 
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />{/* navigate articlelist page  http://localhost:3005/articles/artcleId */}
        </Routes>  
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
