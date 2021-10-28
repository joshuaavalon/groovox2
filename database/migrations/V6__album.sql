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

CREATE TABLE _album_tag (
  "A" UUID NOT NULL,
  "B" UUID NOT NULL,
  FOREIGN KEY ("A") REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY ("B") REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _album_tag_AB_unique ON _album_tag ("A", "B");
CREATE INDEX _album_tag_B_index ON _album_tag ("B");

CREATE TABLE album_role (
  album_id UUID NOT NULL,
  person_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(album_id, person_id, role_id)
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

CREATE TABLE track_role (
  track_id UUID NOT NULL,
  person_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(track_id, person_id, role_id)
);
