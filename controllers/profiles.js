import { Profile } from '../models/profile.js'

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
  .then(profile => res.json(profile))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

// function getRecords
// fetch request to discogs
// res - data from api

//const data = await discogs api
//response sends data as json
//services client -issues request fetch/records
// response back to client, set as state

export { index }
