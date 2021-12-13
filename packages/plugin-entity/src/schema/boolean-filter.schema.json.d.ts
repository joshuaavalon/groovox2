const data = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "/schema/graphql/filter/boolean.schema.json",
  "type": "object",
  "title": "BooleanFilter",
  "properties": {
    "equal": {
      "type": ["boolean", "null"]
    },
    "not": {
      "anyOf": [{ "type": "null" }, { "$ref": "#" }]
    }
  },
  "additionalProperties": false
} as const;
export = data;