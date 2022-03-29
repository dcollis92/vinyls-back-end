import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recordSchema = new Schema({
  cover_image: String,
  label: String,
  master_id: Number,
  master_url: String,
  resource_url: String,
  thumb: String,
  title: String,
  uri: String,
  year: Number
}, {
  timestamps: true
})

const Record = mongoose.model('Record', recordSchema)

export {Record}
