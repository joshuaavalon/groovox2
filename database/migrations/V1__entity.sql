CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE version (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  version TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE language (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  iso TEXT UNIQUE NOT NULL
);

CREATE TABLE multilingual (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  default_language_id UUID NOT NULL,
  FOREIGN KEY (default_language) REFERENCES language (id)
);

CREATE TABLE string (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content TEXT NOT NULL,
  multilingual_id UUID UNIQUE NOT NULL,
  language_id UUID UNIQUE NOT NULL,
  UNIQUE (multilingual_id, language_id),
  FOREIGN KEY (multilingual_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (language_id) REFERENCES language (id) ON DELETE CASCADE
);

CREATE TABLE genre (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE collection (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  description_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE collection_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  collection_id UUID UNIQUE NOT NULL,
  uploaded BOOLEAN DEFAULT FALSE,
  variant TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (collection_id) REFERENCES collection (id) ON DELETE CASCADE
);

CREATE TABLE studio (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  description_id UUID UNIQUE NOT NULL,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE country (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  name_id UUID UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE style (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  description_id UUID UNIQUE NOT NULL,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE mood (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  description_id UUID UNIQUE NOT NULL,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE person (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  name_sort_id UUID UNIQUE NOT NULL,
  description_id UUID UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (name_sort_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE person_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  person_id UUID UNIQUE NOT NULL,
  uploaded BOOLEAN DEFAULT FALSE,
  variant TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE
);

CREATE TABLE album (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  name_sort_id UUID UNIQUE NOT NULL,
  rating NUMERIC(3, 1),
  description_id UUID UNIQUE NOT NULL,
  release_date DATE,
  person_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (name_sort_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (artist_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE album_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  album_id UUID UNIQUE NOT NULL,
  uploaded BOOLEAN DEFAULT FALSE,
  variant TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE
);

CREATE TABLE track (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  name_sort_id UUID UNIQUE NOT NULL,
  description_id UUID UNIQUE NOT NULL,
  album_id UUID NOT NULL,
  rating NUMERIC(3, 1),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (name_sort_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE
);

CREATE TABLE track_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  track_id UUID UNIQUE NOT NULL,
  uploaded BOOLEAN DEFAULT FALSE,
  variant TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE
);

CREATE TABLE movie (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  name_sort_id UUID UNIQUE NOT NULL,
  content_rating TEXT NOT NULL,
  aired DATE,
  tagline_id UUID UNIQUE NOT NULL,
  rating NUMERIC(3, 1),
  description_id UUID UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (name_sort_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (tagline_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE movie_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  movie_id UUID UNIQUE NOT NULL,
  uploaded BOOLEAN DEFAULT FALSE,
  variant TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE
);

CREATE TABLE show (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  name_sort_id UUID UNIQUE NOT NULL,
  content_rating TEXT NOT NULL,
  aired DATE,
  tagline UUID UNIQUE NOT NULL,
  rating NUMERIC(3, 1),
  description_id UUID UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (name_sort_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (tagline_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE show_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  show_id UUID UNIQUE NOT NULL,
  uploaded BOOLEAN DEFAULT FALSE,
  variant TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE
);

CREATE TABLE episode (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_id UUID UNIQUE NOT NULL,
  name_sort_id UUID UNIQUE NOT NULL,
  content_rating TEXT NOT NULL,
  aired DATE,
  rating NUMERIC(3, 1),
  description_id UUID UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (name_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (name_sort_id) REFERENCES multilingual (id) ON DELETE CASCADE,
  FOREIGN KEY (description_id) REFERENCES multilingual (id) ON DELETE CASCADE
);

CREATE TABLE episode_attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  episode_id UUID UNIQUE NOT NULL,
  uploaded BOOLEAN DEFAULT FALSE,
  variant TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (episode_id) REFERENCES episode (id) ON DELETE CASCADE
);

INSERT INTO version(version) VALUES ('v1');
