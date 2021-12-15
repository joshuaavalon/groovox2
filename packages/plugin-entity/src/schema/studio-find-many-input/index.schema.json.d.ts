const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/studio-find-many-input.schema.json",
  "type": "object",
  "title": "StudioFindManyInput",
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid"
    },
    "description": {
      "type": "string"
    }
  },
  "additionalProperties": false
} as const;
export = data;