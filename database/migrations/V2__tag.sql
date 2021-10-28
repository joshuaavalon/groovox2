CREATE TABLE tag_category (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tag (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
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
