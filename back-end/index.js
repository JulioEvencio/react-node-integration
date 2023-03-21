const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

let news = [
	{id: '1', title: 'News 1', slug: 'new-1', body: 'My body 1'},
	{id: '2', title: 'News 2', slug: 'new-2', body: 'My body 2'},
	{id: '3', title: 'News 3', slug: 'new-3', body: 'My body 3'},
	{id: '4', title: 'News 4', slug: 'new-4', body: 'My body 4'},
	{id: '5', title: 'News 5', slug: 'new-5', body: 'My body 5'}
]

app.get('/news', (req, res) => {
	res.status(200).json(news)
})

app.get('/news/:slug', (req, res) => {
	const singleNews = news.find((singleNews => singleNews.slug == req.params.slug))

	if (!singleNews) {
		res.status(404).json({ error: 'Not found' })
	} else {
		res.status(200).json(singleNews)
	}
})

app.use((req, res, next) => {
	res.status(404).json({ error: 'Not found' })
})

app.listen(port, () => console.log('Server: ON'))
