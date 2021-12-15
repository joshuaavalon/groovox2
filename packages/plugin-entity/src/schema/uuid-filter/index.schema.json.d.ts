const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/uuid-filter.schema.json",
  "type": "object",
  "title": "UUIDFilter",
  "properties": {
    "equal": {
      "type": ["string", "null"],
      "format": "uuid"
    },
    "in": {
      "type": ["array", "null"],
      "items": {
        "type": "string",
        "format": "uuid"
      }
    },
    "notIn": {
      "type": ["array", "null"],
      "items": {
        "type": "string",
        "format": "uuid"
      }
    },
    "not": {
      "anyOf": [{ "$ref": "#" }, { "type": "null" }]
    }
  },
  "additionalProperties": false
} as const;
export = data;
