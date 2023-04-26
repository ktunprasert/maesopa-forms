migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  collection.listRule = null

  return dao.saveCollection(collection)
})
