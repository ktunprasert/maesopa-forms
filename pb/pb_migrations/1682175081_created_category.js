migrate((db) => {
  const collection = new Collection({
    "id": "n2w7iu7f4aabixt",
    "created": "2023-04-22 14:51:21.531Z",
    "updated": "2023-04-22 14:51:21.531Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pptxgztu",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n2w7iu7f4aabixt");

  return dao.deleteCollection(collection);
})
