import axios from 'axios'
import { Record } from '../models/record.js'

function getRecord(req, res) {
  console.log(req.query.word);
    axios.get(`https://api.discogs.com/database/search?q=${req.query.word}&{?type,title,release_title,artist,}&key=${process.env.CONSUMER_KEY}&secret=${process.env.CONSUMER_SECRET}`)
    .then(response => {res.json(response.data)})
  }

  /* --- NEEDS REFACTORING --- */
  function addRating(req, res) {
    Record.findById(req.params.id)
    .then(records => {
      records.ratings.push(req.rody)
      records.save()
      .then(() => {
        res.redirect(`/records/${records._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/records")
    })
  }

export {
  getRecord,
  addRating,
}