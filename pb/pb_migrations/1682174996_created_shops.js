migrate((db) => {
  const collection = new Collection({
    "id": "j41df1fz14xztx1",
    "created": "2023-04-22 14:49:56.360Z",
    "updated": "2023-04-22 14:49:56.360Z",
    "name": "shops",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0vgalkp7",
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
  const collection = dao.findCollectionByNameOrId("j41df1fz14xztx1");

  return dao.deleteCollection(collection);
})
