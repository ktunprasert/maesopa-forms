migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n2w7iu7f4aabixt")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n2w7iu7f4aabixt")

  collection.listRule = null

  return dao.saveCollection(collection)
})
