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

CREATE TABLE person_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  person_id UUID NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE
);

CREATE TABLE _person_tag (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _person_tag_ab_unique ON _person_tag (a, b);
CREATE INDEX _person_tag_b_index ON _person_tag (b);

CREATE TABLE unit (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE unit_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  unit_id UUID NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (unit_id) REFERENCES unit (id) ON DELETE CASCADE
);

CREATE TABLE _tag_unit (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES tag (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES unit (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _tag_unit_ab_unique ON _tag_unit (a, b);
CREATE INDEX _tag_unit_b_index ON _tag_unit (b);

CREATE TABLE _person_unit (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES unit (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _person_unit_ab_unique ON _person_unit (a, b);
CREATE INDEX _person_unit_b_index ON _person_unit (b);
