migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlkvw0pu",
    "name": "shops",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "j41df1fz14xztx1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j")

  // remove
  collection.schema.removeField("xlkvw0pu")

  return dao.saveCollection(collection)
})
