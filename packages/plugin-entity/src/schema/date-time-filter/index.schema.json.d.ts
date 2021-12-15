const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/date-time-filter.schema.json",
  "type": "object",
  "title": "DateTimeFilter",
  "properties": {
    "equal": {
      "type": "object",
      "instanceof": "Date"
    },
    "gt": {
      "type": "object",
      "instanceof": "Date"
    },
    "gte": {
      "type": "object",
      "instanceof": "Date"
    },
    "lt": {
      "type": "object",
      "instanceof": "Date"
    },
    "lte": {
      "type": "object",
      "instanceof": "Date"
    },
    "in": {
      "type": "array",
      "items": {
        "type": "object",
        "instanceof": "Date"
      }
    },
    "notIn": {
      "type": "array",
      "items": {
        "type": "object",
        "instanceof": "Date"
      }
    },
    "not": {
      "anyOf": [{ "$ref": "#" }]
    }
  },
  "additionalProperties": false
} as const;
export = data;