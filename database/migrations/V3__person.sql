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

CREATE TABLE _person_tag (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _person_tag_ab_unique ON _person_tag ("A", "B");
CREATE INDEX _person_tag_b_index ON _person_tag ("B");

CREATE TABLE unit (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE _tag_unit (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES tag (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES unit (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _tag_unit_ab_unique ON _tag_unit ("A", "B");
CREATE INDEX _tag_unit_b_index ON _tag_unit ("B");

CREATE TABLE _person_unit (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES unit (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _person_unit_ab_unique ON _person_unit ("A", "B");
CREATE INDEX _person_unit_b_index ON _person_unit ("B");
