migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nfaoz10shm87w4")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6nfaoz10shm87w4")

  collection.listRule = null

  return dao.saveCollection(collection)
})
