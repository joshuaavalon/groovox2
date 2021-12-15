const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/studio-create-one-input.schema.json",
  "type": "object",
  "title": "StudioCreateOneInput",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": ["name", "description"]
} as const;
export = data;