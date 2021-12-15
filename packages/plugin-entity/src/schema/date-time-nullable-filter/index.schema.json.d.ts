const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/date-time-nullable-filter.schema.json",
  "type": "object",
  "title": "DateTimeNullableFilter",
  "properties": {
    "equal": {
      "type": ["object", "null"],
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
      "type": ["array", "null"],
      "items": {
        "type": "object",
        "instanceof": "Date"
      }
    },
    "notIn": {
      "type": ["array", "null"],
      "items": {
        "type": "object",
        "instanceof": "Date"
      }
    },
    "not": {
      "anyOf": [{ "$ref": "#" }, { "type": "null" }]
    }
  },
  "additionalProperties": false
} as const;
export = data;