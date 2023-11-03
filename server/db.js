const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
        console.log('Could not connect to database');
    }
}