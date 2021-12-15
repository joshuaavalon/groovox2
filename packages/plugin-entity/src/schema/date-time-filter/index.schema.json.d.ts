const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/date-time-filter.schema.json",
  "type": "object",
  "title": "DateTimeFilter",
  "properties": {
    "equal": {
      "type": ["object", "null"],
      "instanceof": "Date"
    },
    "gt": {
      "type": ["object", "null"],
      "instanceof": "Date"
    },
    "gte": {
      "type": ["object", "null"],
      "instanceof": "Date"
    },
    "lt": {
      "type": ["object", "null"],
      "instanceof": "Date"
    },
    "lte": {
      "type": ["object", "null"],
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
