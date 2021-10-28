CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE version (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  version INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

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

CREATE TABLE person (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  name_sort TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
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

CREATE TABLE album (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  name_sort TEXT UNIQUE NOT NULL,
  rating NUMERIC(3, 1),
  description TEXT NOT NULL,
  release_date DATE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE _album_attachment (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES attachment (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _album_attachment_AB_unique ON _album_attachment ("A", "B");
CREATE INDEX _album_attachment_B_index ON _album_attachment ("B");

CREATE TABLE _album_person (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES person (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _album_person_AB_unique ON _album_person ("A", "B");
CREATE INDEX _album_person_B_index ON _album_person ("B");

CREATE TABLE _album_tag (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _album_tag_AB_unique ON _album_tag ("A", "B");
CREATE INDEX _album_tag_B_index ON _album_tag ("B");

CREATE TABLE track (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  name_sort TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  album_id UUID NOT NULL,
  rating NUMERIC(3, 1),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE
);

CREATE TABLE _attachment_track (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES track (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _attachment_track_AB_unique ON _attachment_track ("A", "B");
CREATE INDEX _attachment_track_B_index ON _attachment_track ("B");

CREATE TABLE _tag_track (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES tag (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES track (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _tag_track_AB_unique ON _tag_track ("A", "B");
CREATE INDEX _tag_track_B_index ON _tag_track ("B");
