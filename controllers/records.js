import axios from 'axios'

function getRecord(req, res) {
  console.log(req.query.word);
    axios.get(`https://api.discogs.com/database/search?q=${req.query.word}&{?type,title,release_title,artist,}&key=${process.env.CONSUMER_KEY}&secret=${process.env.CONSUMER_SECRET}`)
  .then(response => {res.json(response.data)})
  
  }

export {
  getRecord
}