migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kxis26br",
    "name": "templates",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6nfaoz10shm87w4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  // remove
  collection.schema.removeField("kxis26br")

  return dao.saveCollection(collection)
})
