const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}
else if (process.argv.length === 4 || process.argv.length > 5) {
  console.log('input password name phonenumber')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.lrrqyck.mongodb.net/phoneBook?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)
  .then(() => {
    console.log('connection successfull')
  })
  .catch((error) => {
    console.error('Error in connecting to database', error.message)
    process.exit(1)
  })

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

if ((process.argv.length == 5)) {
const contact = new Contact({
  name: process.argv[3],
  number: process.argv[4],
})
  contact.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
    return ;
  })

}

if (process.argv.length === 3){
Contact.find({}).then(result => {
	result.forEach(contact => {
	  console.log(contact)
	})
	mongoose.connection.close()
  })
  }