const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/string-filter.schema.json",
  "type": "object",
  "title": "StringFilter",
  "properties": {
    "contain": {
      "type": ["string", "null"]
    },
    "endWith": {
      "type": ["string", "null"]
    },
    "equal": {
      "type": ["string", "null"]
    },
    "startWith": {
      "type": ["string", "null"]
    },
    "in": {
      "type": ["array", "null"],
      "items": {
        "type": "string"
      }
    },
    "notIn": {
      "type": ["array", "null"],
      "items": {
        "type": "string"
      }
    },
    "not": {
      "anyOf": [{ "$ref": "#" }, { "type": "null" }]
    }
  },
  "additionalProperties": false
} as const;
export = data;
