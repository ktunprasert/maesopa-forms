migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j41df1fz14xztx1")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j41df1fz14xztx1")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
