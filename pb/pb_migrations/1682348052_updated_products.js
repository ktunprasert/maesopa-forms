migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  collection.createRule = null

  return dao.saveCollection(collection)
})
