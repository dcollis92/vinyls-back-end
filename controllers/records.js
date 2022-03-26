import axios from 'axios'

function getRecord(req, res) {
    axios.get(`https://api.discogs.com/database/search?q=${req.body.query}&{?type,title,release_title,artist,}&key=${process.env.CONSUMER_KEY}&secret=${process.env.CONSUMER_SECRET}`)
  .then(response => {res.json(response.data)})
  
  }

export {
  getRecord
}