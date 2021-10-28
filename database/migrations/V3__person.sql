CREATE TABLE person (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_first TEXT NOT NULL,
  name_middle TEXT NOT NULL,
  name_last TEXT NOT NULL,
  name_sort TEXT NOT NULL,
  description TEXT NOT NULL,
  birth_date DATE,
  death_date DATE,
  sex TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE _attachment_person (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES person (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _attachment_person_ab_unique ON _attachment_person (a, b);
CREATE INDEX _attachment_person_b_index ON _attachment_person (b);

CREATE TABLE _person_tag (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _person_tag_ab_unique ON _person_tag (a, b);
CREATE INDEX _person_tag_b_index ON _person_tag (b);

CREATE TABLE group (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE _attachment_group (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES group (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _attachment_group_ab_unique ON _attachment_group (a, b);
CREATE INDEX _attachment_group_b_index ON _attachment_group (b);

CREATE TABLE _group_tag (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES group (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _group_tag_ab_unique ON _group_tag (a, b);
CREATE INDEX _group_tag_b_index ON _group_tag (b);

CREATE TABLE _group_person (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES group (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES person (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _group_person_ab_unique ON _group_person (a, b);
CREATE INDEX _group_person_b_index ON _group_person (b);
