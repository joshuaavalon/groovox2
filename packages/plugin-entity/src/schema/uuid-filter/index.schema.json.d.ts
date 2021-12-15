const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/uuid-filter.schema.json",
  "type": "object",
  "title": "UUIDFilter",
  "properties": {
    "equal": {
      "type": "string",
      "format": "uuid"
    },
    "in": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uuid"
      }
    },
    "notIn": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uuid"
      }
    },
    "not": {
      "$ref": "#"
    }
  },
  "additionalProperties": false
} as const;
export = data;