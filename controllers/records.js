import axios from 'axios'
import { Record } from '../models/record.js'

function getRecord(req, res) {  
  axios.get(`https://api.discogs.com/database/search?q=${req.query.word}&{?type,title,release_title,artist,}&key=${process.env.CONSUMER_KEY}&secret=${process.env.CONSUMER_SECRET}`)
  .then(response => {res.json(response.data)})
}

function getDbRecords(req, res) {
  Record.find({})
  .then(records => res.json(records))
    .catch(err => {
   console.log(err)
   res.status(500).json(err)
  })
}

function recordDetails(req, res) {    
  Record.findById(req.params.id)
  .then(record => res.json(record))
    .catch(err => {
  console.log(err)
  res.status(500).json(err)
  })
}


  
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

  const createComment = async (req, res) => {    
  try {
    req.body.comment = req.user.profile
    const record = await Record.findById(req.params.id)
    record.comments.push(req.body)
    await record.save()
    return res.status(201).json(record)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const editComment = async (req, res) => {
  try {
    const updatedRecord = await Record.findById(req.params.recordId)
    const idx = updatedRecord.comments.findIndex((comment) =>
      comment._id.equals(req.params.commentId))
      await updatedPost.save()
      return res.status(200).json(updatedPost)  
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteComment = async(req, res) => {
  try {
    const post = await Post.findById(req.params.recordId)
    record.comments.remove({_id: req.params.commentId})
    await record.save()
    return res.status(204).end()
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  createComment,
  editComment,
  deleteComment,
  getRecord,
  addRating,
  getDbRecords,
  recordDetails
}