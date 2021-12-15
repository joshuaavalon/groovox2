const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/decimal-filter.schema.json",
  "type": "object",
  "title": "DecimalFilter",
  "properties": {
    "equal": {
      "type": ["object", "null"]
    },
    "gt": {
      "type": ["object", "null"]
    },
    "gte": {
      "type": ["object", "null"]
    },
    "lt": {
      "type": ["object", "null"]
    },
    "lte": {
      "type": ["object", "null"]
    },
    "in": {
      "type": ["array", "null"],
      "items": {
        "type": "object"
      }
    },
    "notIn": {
      "type": ["array", "null"],
      "items": {
        "type": "object"
      }
    },
    "not": {
      "anyOf": [{ "$ref": "#" }, { "type": "null" }]
    }
  },
  "additionalProperties": false
} as const;
export = data;
