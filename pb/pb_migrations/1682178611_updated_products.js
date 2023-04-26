migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tozdtvjg",
    "name": "internal",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  // remove
  collection.schema.removeField("tozdtvjg")

  return dao.saveCollection(collection)
})
