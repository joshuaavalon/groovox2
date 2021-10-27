-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

CREATE TABLE "_TagToAttachment" (
    "A" UUID NOT NULL REFERENCES tag(id) ,
    "B" UUID NOT NULL REFERENCES attachment(id)
);

CREATE UNIQUE INDEX "_TagToAttachment_AB_unique" ON "_TagToAttachment"("A","B");
CREATE INDEX "_TagToAttachment_B_index" ON "_TagToAttachment"("B");

CREATE TABLE "Category" (
    id integer SERIAL PRIMARY KEY
);

CREATE TABLE "Post" (
    id integer SERIAL PRIMARY KEY
);

CREATE TABLE "_CategoryToPost" (
    "A" integer NOT NULL REFERENCES "Category"(id) ,
    "B" integer NOT NULL REFERENCES "Post"(id)
);
CREATE UNIQUE INDEX "_CategoryToPost_AB_unique" ON "_CategoryToPost"("A","B");
CREATE INDEX "_CategoryToPost_B_index" ON "_CategoryToPost"("B");
