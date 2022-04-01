import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  records: [{ type: Schema.Types.ObjectId, ref: 'Record' }]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
