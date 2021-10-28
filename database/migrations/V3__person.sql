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
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES person (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _attachment_person_AB_unique ON _attachment_person ("A", "B");
CREATE INDEX _attachment_person_B_index ON _attachment_person ("B");

CREATE TABLE _person_tag (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _person_tag_AB_unique ON _person_tag ("A", "B");
CREATE INDEX _person_tag_B_index ON _person_tag ("B");
