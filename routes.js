const express = require("express")
const router = express.Router()
const Pokemon = require('./models/Pokemon')

router.get("/pokedex", async (req, res) => {
  const pokemon = await Pokemon.find()
  res.send(pokemon)
})

router.post("/pokedex", async (req, res) => {
  try {
    const pokemon = new Pokemon({
      name: req.body.name,
      _id: req.body._id,
      type: req.body.type
    })
    await pokemon.save()
    res.send(pokemon)
  } catch {
    res.status(401);
    res.send({error: 'Pokemon number already used'})
  }
})

router.delete("/pokedex/reset", async (req, res) => {
  try {
    await Pokemon.collection.drop();
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Pokedex already empty!" })
  }
})

router.get("/pokedex/:_id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ _id: req.params._id }).orFail()
    res.send(pokemon)
  } catch {
    res.status(404)
    res.send({ error: "Pokemon not in pokedex!" })
  }
})

router.patch("/pokedex/:_id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndUpdate(req.params._id, req.body, {new: true})

    // const pokemon = await Pokemon.findOne({ _id: req.params._id }).orFail()
    // if (req.body.name) {
    //   pokemon.name = req.body.name
    // }
    // if (req.body.type) {
    //   pokemon.type = req.body.type
    // }
    // await pokemon.save()

    res.send(pokemon)
  } catch {
    res.status(404)
    res.send({ error: "Pokemon not in pokedex!" })
  }
})

router.delete("/pokedex/:_id", async (req, res) => {
  try {
    await Pokemon.findByIdAndDelete(req.params._id);
    //await Pokemon.deleteOne({ _id: req.params._id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Pokemon not in pokedex!" })
  }
})

module.exports = router
