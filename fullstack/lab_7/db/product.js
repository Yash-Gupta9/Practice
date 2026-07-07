let mongoose = require('mongoose');

let p = mongoose.Schema({
    Name: {
        type: String
    },
    price: {        // ✅ fixed (same as insert)
        type: Number
    },
    url: {
        type: String
    },
    rating: Number
});

let P1 = mongoose.model('P1', p);

module.exports = P1;