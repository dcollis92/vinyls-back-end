import { Profile } from '../models/profile.js'
import { Record } from '../models/record.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function show(req, res) {
  console.log(req.params.id)
  Profile.findById(req.params.id)
  .populate("records")
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}



function addRecord(req, res) {
  console.log(req.body)
  const record = new Record(req.body)
  record.save()
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.records.push(record)
    profile.save()
    .then(updatedProfile => {
      res.json(updatedProfile)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function removeRecord(req, res) {
  console.log('record id to be deleted', req.params.record._id)
  // Profile.findById(req.user.profile) 
  // .then(profile => {
  //   const idx = profile.records.findIndex(record =>
  //     record._id === req.params.record._id)
  //     console.log('hi', profile.records[idx]);
  //   profile.records[idx].remove()
  //   profile.save()
  //   .then(savedProfile => {
  //     res.json(savedProfile)
  //   })
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.status(500).json(err)
  // })
}

//const data = await discogs api
//response sends data as json
//services client -issues request fetch/records
// response back to client, set as state
// updated profile 

export { 
  index, 
  show, 
  addRecord,
  removeRecord
}