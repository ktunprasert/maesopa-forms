migrate((db) => {
  const collection = new Collection({
    "id": "tcqwc37wfwsulyk",
    "created": "2023-04-27 04:09:06.149Z",
    "updated": "2023-04-27 04:09:06.149Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2utvhyrf",
        "name": "date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "lep3ynle",
        "name": "shop",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "j41df1fz14xztx1",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "l6lqkbmn",
        "name": "have",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "o4q0pcbe",
        "name": "want",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ptzsfc7a",
        "name": "received",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "r7c4i8zj",
        "name": "notes",
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
  const collection = dao.findCollectionByNameOrId("tcqwc37wfwsulyk");

  return dao.deleteCollection(collection);
})
