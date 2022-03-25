import axios from 'axios'

function getRecord(req, res) {
  console.log('hello');
  axios.get(`https://api.discogs.com/database/search?q=${req.body.search}=${process.env.CONSUMER_KEY}&secret=${process.env.CONSUMER_SECRET}`)
  .then(response => {res.json(response.data)})
  
  }

export {
  getRecord
}