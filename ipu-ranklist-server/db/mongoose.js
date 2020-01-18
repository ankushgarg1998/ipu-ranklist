var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
// mongoose.set('debug', true);

module.exports.mongoose = mongoose;
