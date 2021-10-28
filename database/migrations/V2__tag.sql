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
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _attachment_tag_ab_unique ON _attachment_tag (a, b);
CREATE INDEX _attachment_tag_b_index ON _attachment_tag (b);
