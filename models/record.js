import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ratingSchema = new Schema({
  rating: {type: Number, min: 1, max: 5, default: 5},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
},{ 
  timestamps: true
})

const recordSchema = new Schema({
  cover_image: String,
  //label: String,
  master_id: Number,
  master_url: String,
  resource_url: String,
  thumb: String,
  title: String,
  uri: String,
  year: Number,
  ratings: [ratingSchema]
}, {
  timestamps: true
})

const Record = mongoose.model('Record', recordSchema)
const Rating = mongoose.model("Rating", ratingSchema)

export {
  Record,
  Rating
}
