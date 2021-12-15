const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/string-filter.schema.json",
  "type": "object",
  "title": "StringFilter",
  "properties": {
    "contain": {
      "type": "string"
    },
    "endWith": {
      "type": "string"
    },
    "equal": {
      "type": "string"
    },
    "startWith": {
      "type": "string"
    },
    "in": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "notIn": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "not": {
      "$ref": "#"
    }
  },
  "additionalProperties": false
} as const;
export = data;