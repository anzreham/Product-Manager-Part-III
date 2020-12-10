const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crmdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( ()=> console.log("successfully connected to the crmdb"))
.catch( err => console.log(err))
