migrate((db) => {
  const collection = new Collection({
    "id": "6nfaoz10shm87w4",
    "created": "2023-04-22 15:47:22.725Z",
    "updated": "2023-04-22 15:47:22.725Z",
    "name": "templates",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "efbg7kop",
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
    "indexes": [
      "CREATE UNIQUE INDEX `idx_zXUPCXg` ON `templates` (`name`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("6nfaoz10shm87w4");

  return dao.deleteCollection(collection);
})
