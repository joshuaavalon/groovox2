CREATE TABLE movie (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  name_sort TEXT UNIQUE NOT NULL,
  content_rating TEXT NOT NULL,
  aired_date DATE,
  tagline TEXT UNIQUE NOT NULL,
  rating NUMERIC(3, 1),
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE _movie_tag (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES movie (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES tag (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _movie_tag_ab_unique ON _movie_tag (a, b);
CREATE INDEX _movie_tag_b_index ON _movie_tag (b);

CREATE TABLE _movie_studio (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES movie (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES studio (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _movie_studio_ab_unique ON _movie_studio (a, b);
CREATE INDEX _movie_studio_b_index ON _movie_studio (b);

CREATE TABLE movie_role (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  movie_id UUID NOT NULL,
  person_id UUID NOT NULL,
  type TEXT NOT NULL,
  role TEXT NOT NULL,
  sequence INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  UNIQUE(movie_id, type, sequence)
);

CREATE TABLE movie_alias (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  alias TEXT NOT NULL,
  movie_id UUID NOT NULL,
  sequence INTEGER NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE,
  UNIQUE(movie_id, sequence)
);
