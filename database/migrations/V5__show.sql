CREATE TABLE show (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  name_sort TEXT UNIQUE NOT NULL,
  content_rating TEXT NOT NULL,
  aired_date DATE,
  tagline TEXT UNIQUE NOT NULL,
  rating NUMERIC(3, 1),
  description TEXT NOT NULL,
  studio_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (studio_id) REFERENCES studio (id) ON DELETE CASCADE
);

CREATE TABLE _show_tag (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES show (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _show_tag_ab_unique ON _show_tag (a, b);
CREATE INDEX _show_tag_b_index ON _show_tag (b);

CREATE TABLE show_person_role (
  show_id UUID NOT NULL,
  person_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(show_id, person_id, role_id)
);

CREATE TABLE show_alias (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  alias TEXT NOT NULL,
  show_id UUID NOT NULL,
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE
);

CREATE TABLE show_season (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  show_id UUID NOT NULL,
  name TEXT NOT NULL,
  season_no INTEGER NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (show_id, season_no),
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE
);

CREATE TABLE show_season_role (
  show_season_id UUID NOT NULL,
  person_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (show_season_id) REFERENCES show_season (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(show_season_id, person_id, role_id)
);

CREATE TABLE episode (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  content_rating TEXT NOT NULL,
  aired_date DATE,
  rating NUMERIC(3, 1),
  description TEXT NOT NULL,
  season_id UUID NOT NULL,
  episode_no INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (season_id, episode_no),
  FOREIGN KEY (season_id) REFERENCES show_season (id) ON DELETE CASCADE
);

CREATE TABLE episode_role (
  episode_id UUID NOT NULL,
  person_id UUID NOT NULL,
  role_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (episode_id) REFERENCES episode (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  PRIMARY KEY(episode_id, person_id, role_id)
);

CREATE TABLE _episode_tag (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES episode (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _episode_tag_ab_unique ON _episode_tag (a, b);
CREATE INDEX _episode_tag_b_index ON _episode_tag (b);
