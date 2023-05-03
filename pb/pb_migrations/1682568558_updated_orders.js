migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tcqwc37wfwsulyk")

  collection.indexes = [
    "CREATE INDEX `idx_fghp8nm` ON `orders` (\n  `date`,\n  `shop`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tcqwc37wfwsulyk")

  collection.indexes = []

  return dao.saveCollection(collection)
})
