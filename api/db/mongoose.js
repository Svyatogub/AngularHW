const mongoose = require('mongoose');
const DB_URL = `mongodb+srv://Svyatogub:TaZaSho@cluster0.ir3xwng.mongodb.net/?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise
mongoose.connect(DB_URL).then(() => {
    console.log('conected to mongoDB')
}).catch((err) => {
    console.log(`Error on server ${err.message}`)
})

module.exports = {
    mongoose
}