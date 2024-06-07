const express = require('express');
const cors = require('cors');
const { scrapeMediumArticles } = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/scrape', async (req, res) => {
    const { topic } = req.body;

    if (!topic) {
        return res.status(400).json({ error: 'Topic is required' });
    }

    try {
        const articles = await scrapeMediumArticles(topic);
        res.status(200).json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to scrape articles' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
