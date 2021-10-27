CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE version (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  version INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tag_category (
  id UUID PRIMARY KEY,
  custom_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tag (
  id UUID PRIMARY KEY,
  custom_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES tag_category (id) ON DELETE CASCADE
);

CREATE TABLE attachment (
  id UUID PRIMARY KEY,
  custom_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE _attachment_tag (
    "A" UUID NOT NULL REFERENCES attachment(id),
    "B" UUID NOT NULL REFERENCES tag(id)
);

CREATE UNIQUE INDEX _attachment_tag_AB_unique ON _attachment_tag("A","B");
CREATE INDEX _attachment_tag_B_index ON _attachment_tag("B");
