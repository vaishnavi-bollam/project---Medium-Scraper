
// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import ArticleList from './components/ArticleList';
import './App.css';

function App() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (topic) => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/scrape', { topic });
            setArticles(response.data);
        } catch (error) {
            setError('Failed to fetch articles. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>Medium Article Scraper</h1>
            <SearchForm onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            <ArticleList articles={articles} />
        </div>
    );
}

export default App;
