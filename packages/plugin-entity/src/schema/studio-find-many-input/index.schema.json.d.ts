const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/studio-find-many-input.schema.json",
  "type": "object",
  "title": "StudioFindManyInput",
  "properties": {
    "id": {
      "$ref": "./uuid-filter.schema.json"
    },
    "name": {
      "$ref": "./string-filter.schema.json"
    },
    "description": {
      "$ref": "./string-filter.schema.json"
    },
    "createdAt": {
      "$ref": "./date-time-filter.schema.json"
    },
    "updatedAt": {
      "$ref": "./date-time-filter.schema.json"
    },
    "and": {
      "type": "array",
      "items": {
        "$ref": "#"
      }
    },
    "or": {
      "type": "array",
      "items": {
        "$ref": "#"
      }
    },
    "not": {
      "type": "array",
      "items": {
        "$ref": "#"
      }
    }
  },
  "additionalProperties": false
} as const;
export = data;