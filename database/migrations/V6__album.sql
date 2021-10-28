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
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES attachment (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _album_attachment_ab_unique ON _album_attachment (a, b);
CREATE INDEX _album_attachment_b_index ON _album_attachment (b);

CREATE TABLE _album_tag (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _album_tag_ab_unique ON _album_tag (a, b);
CREATE INDEX _album_tag_b_index ON _album_tag (b);

CREATE TABLE album_person_role (
  album_id UUID NOT NULL,
  person_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(album_id, person_id, role_id)
);

CREATE TABLE album_group_role (
  album_id UUID NOT NULL,
  group_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (group_id) REFERENCES group (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(album_id, group_id, role_id)
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
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES track (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _attachment_track_ab_unique ON _attachment_track (a, b);
CREATE INDEX _attachment_track_b_index ON _attachment_track (b);

CREATE TABLE _tag_track (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES tag (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES track (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _tag_track_ab_unique ON _tag_track (a, b);
CREATE INDEX _tag_track_b_index ON _tag_track (b);

CREATE TABLE track_person_role (
  track_id UUID NOT NULL,
  person_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(track_id, person_id, role_id)
);

CREATE TABLE track_group_role (
  track_id UUID NOT NULL,
  group_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE,
  FOREIGN KEY (group_id) REFERENCES group (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(track_id, group_id, role_id)
);
