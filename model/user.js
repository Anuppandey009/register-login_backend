const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        mobile: { type: Number, required: false },
        email: { type: String, required: false},
        password: { type: String, required: true }
    },
    { collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model