import React, { useState } from 'react';

function SearchForm({ onSearch }) {
    const [topic, setTopic] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (topic.trim()) {
            onSearch(topic);
        } else {
            alert('Please enter a topic to search for articles.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;
