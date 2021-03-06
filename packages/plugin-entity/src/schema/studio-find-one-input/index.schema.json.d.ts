const data = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "/schema/studio-find-one-input.schema.json",
  "type": "object",
  "title": "StudioFindOneInput",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": ["id"]
} as const;
export = data;