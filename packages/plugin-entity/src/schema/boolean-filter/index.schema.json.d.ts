const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/boolean-filter.schema.json",
  "type": "object",
  "title": "BooleanFilter",
  "properties": {
    "equal": {
      "type": ["boolean", "null"]
    },
    "not": {
      "anyOf": [{ "$ref": "#" }, { "type": "null" }]
    }
  },
  "additionalProperties": false
} as const;
export = data;
