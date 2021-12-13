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

CREATE TABLE _album_tag (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _album_tag_ab_unique ON _album_tag ("A", "B");
CREATE INDEX _album_tag_b_index ON _album_tag ("B");

CREATE TABLE album_person_role (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  album_id UUID NOT NULL,
  person_id UUID NOT NULL,
  type TEXT NOT NULL,
  role TEXT NOT NULL,
  sequence INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  UNIQUE(album_id, type, sequence)
);

CREATE TABLE album_unit_role (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  album_id UUID NOT NULL,
  unit_id UUID NOT NULL,
  type TEXT NOT NULL,
  role TEXT NOT NULL,
  sequence INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (unit_id) REFERENCES unit (id) ON DELETE CASCADE,
  UNIQUE(album_id, type, sequence)
);

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

CREATE TABLE _tag_track (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES tag (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES track (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _tag_track_ab_unique ON _tag_track ("A", "B");
CREATE INDEX _tag_track_b_index ON _tag_track ("B");

CREATE TABLE track_person_role (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  track_id UUID NOT NULL,
  person_id UUID NOT NULL,
  type TEXT NOT NULL,
  role TEXT NOT NULL,
  sequence INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  UNIQUE(track_id, type, sequence)
);

CREATE TABLE track_unit_role (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  track_id UUID NOT NULL,
  unit_id UUID NOT NULL,
  type TEXT NOT NULL,
  role TEXT NOT NULL,
  sequence INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE,
  FOREIGN KEY (unit_id) REFERENCES unit (id) ON DELETE CASCADE,
  UNIQUE(track_id, type, sequence)
);
