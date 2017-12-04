'use strict'

const mongoose = require('mongoose')
const config = require('config')
const bcrypt = require('bcrypt-as-promised')
const Promise = require('bluebird')

const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  createdAt: { type: Date, default: Date.now }
})

userSchema.pre('save', function preSaveUser (next) {
  if (!this.isModified('password')) return next()

  bcrypt.genSalt(config.get('db.bcryptSaltWorkFactor'))
    .then(salt => bcrypt.hash(this.password, salt))
    .then((hash) => {
      this.password = hash
      next()
    })
    .catch(next)
})

userSchema.statics.checkPasswords = function checkPass (pass, storedPass) {
  return bcrypt.compare(pass, storedPass)
    .catch(() => Promise.resolve(false))
}

userSchema.methods.comparePassword = function comparePassword (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
    .catch(() => Promise.resolve(false))
}

module.exports = mongoose.model('User', userSchema)
