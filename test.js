const mongoose = require('mongoose')
const Schema = mongoose.Schema

//connect DB
mongoose.connect('mongodb://127.0.0.1/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//create schema

const PhotoSchema = new Schema({
    title: String,
    description: String,
})

const Photo = mongoose.model('Photo', PhotoSchema)


// Photo.create({
//     title: 'Photo Title 2',
//     description: 'Photo description 2 lorem ipsum',
// })

// Photo.find({}, (err, data) => {
//     console.log(data)
// })

const id = "62422db6240c580dd563cca9"

// Photo.findByIdAndUpdate(id, {
//     title: "Photo title 111 updated",
//     description: "photo description 111 uptated"
// },
//  {
//      new: true
//  },
//  (err, data) => {
//     console.log(data)
// })

Photo.findByIdAndDelete(id,(err,data)=>{
    console.log("Photo is removed")
})