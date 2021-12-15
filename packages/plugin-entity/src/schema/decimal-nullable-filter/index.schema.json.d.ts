const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/decimal-nullable-filter.schema.json",
  "type": "object",
  "title": "DecimalNullableFilter",
  "properties": {
    "equal": {
      "type": ["object", "null"]
    },
    "gt": {
      "type": "object"
    },
    "gte": {
      "type": "object"
    },
    "lt": {
      "type": "object"
    },
    "lte": {
      "type": "object"
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