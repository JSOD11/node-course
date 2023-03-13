const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

// async function allows for await
router.post('/users', async (req, res) => { // POST == Create
  const user = new User(req.body)

  try {
    const token = await user.generateAuthToken()
    await user.save() // instead of save().then(), we just await
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(400).send(e)
  }
})

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (e) {
    res.status(400).send()
  }
})

router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  }
})

router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  }
})

router.get('/users/me', auth, async (req, res) => { // GET == read
  res.send(req.user)
})

router.patch('/users/me', auth, async (req, res) => { // patch == update
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    updates.forEach((update) => req.user[update] = req.body[update])
    await req.user.save()
    res.send(req.user)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/users/me', auth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id)
    if (!user) { return res.status(404).send() }
    res.status(200).send(user)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router