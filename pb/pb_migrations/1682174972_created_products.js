migrate((db) => {
  const collection = new Collection({
    "id": "zxcta6int8llm0j",
    "created": "2023-04-22 14:49:32.593Z",
    "updated": "2023-04-22 14:49:32.593Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fj5vl5yy",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xz1buftn",
        "name": "category",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ukgcxlsk",
        "name": "unit",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "kg",
            "ชุด",
            "เสิร์ฟ",
            "ถุง",
            "แผง",
            "ลูก",
            "กระสอบ",
            "กระป๋อง",
            "แกลลอน",
            "แผ่น",
            "ขวด",
            "ขวด"
          ]
        }
      },
      {
        "system": false,
        "id": "rsvqyjo4",
        "name": "source",
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
  const collection = dao.findCollectionByNameOrId("zxcta6int8llm0j");

  return dao.deleteCollection(collection);
})
