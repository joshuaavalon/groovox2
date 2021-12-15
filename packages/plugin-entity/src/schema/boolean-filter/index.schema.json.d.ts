const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/boolean-filter.schema.json",
  "type": "object",
  "title": "BooleanFilter",
  "properties": {
    "equal": {
      "type": "boolean"
    }
  },
  "additionalProperties": false
} as const;
export = data;