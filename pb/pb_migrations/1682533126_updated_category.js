migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n2w7iu7f4aabixt")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n2w7iu7f4aabixt")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
