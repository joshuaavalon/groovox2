CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE version (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  version INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attachment (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tag_category (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tag (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES tag_category (id) ON DELETE CASCADE
);

CREATE TABLE _attachment_tag (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _attachment_tag_AB_unique ON _attachment_tag ("A", "B");
CREATE INDEX _attachment_tag_B_index ON _attachment_tag ("B");

CREATE TABLE collection (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE _attachment_collection (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES collection (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _attachment_collection_AB_unique ON _attachment_collection ("A", "B");
CREATE INDEX _attachment_collection_B_index ON _attachment_collection ("B");
