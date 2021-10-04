CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE version (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  version TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  uploaded BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE genre (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE collection (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT UNIQUE NOT NULL,
  summary TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE collection_attachment (
  attachment_id UUID NOT NULL,
  collection_id BIGINT NOT NULL,
  variant TEXT NOT NULL,
  FOREIGN KEY (attachment_id) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (collection_id) REFERENCES collection (id) ON DELETE CASCADE,
  PRIMARY KEY (attachment_id, collection_id, variant),
  UNIQUE (collection_id, variant)
);

CREATE TABLE studio (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE country (
  code TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE style (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE mood (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE person (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  name_sort TEXT,
  name_match TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE person_attachment (
  attachment_id UUID NOT NULL,
  person_id BIGINT NOT NULL,
  variant TEXT NOT NULL,
  FOREIGN KEY (attachment_id) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  PRIMARY KEY (attachment_id, person_id, variant),
  UNIQUE (person_id, variant)
);

CREATE TABLE artist (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  person_id BIGINT UNIQUE NOT NULL,
  summary TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE
);

CREATE TABLE artist_attachment (
  attachment_id UUID NOT NULL,
  artist_id BIGINT NOT NULL,
  variant TEXT NOT NULL,
  FOREIGN KEY (attachment_id) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (artist_id) REFERENCES artist (id) ON DELETE CASCADE,
  PRIMARY KEY (attachment_id, artist_id, variant),
  UNIQUE (artist_id, variant)
);

CREATE TABLE artist_similar (
  artist1_id BIGINT NOT NULL,
  artist2_id BIGINT NOT NULL,
  FOREIGN KEY (artist1_id) REFERENCES artist (id) ON DELETE CASCADE,
  FOREIGN KEY (artist2_id) REFERENCES artist (id) ON DELETE CASCADE,
  PRIMARY KEY (artist1_id, artist2_id)
);

CREATE TABLE artist_genre (
  artist_id BIGINT NOT NULL,
  genre_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist (id) ON DELETE CASCADE,
  FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE,
  PRIMARY KEY (artist_id, ordering),
  UNIQUE (artist_id, genre_id)
);

CREATE TABLE artist_collection (
  artist_id BIGINT NOT NULL,
  collection_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist (id) ON DELETE CASCADE,
  FOREIGN KEY (collection_id) REFERENCES collection (id) ON DELETE CASCADE,
  PRIMARY KEY (artist_id, ordering),
  UNIQUE (artist_id, collection_id)
);

CREATE TABLE artist_country (
  artist_id BIGINT NOT NULL,
  country_code TEXT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist (id) ON DELETE CASCADE,
  FOREIGN KEY (country_code) REFERENCES country (code) ON DELETE CASCADE,
  PRIMARY KEY (artist_id, ordering),
  UNIQUE (artist_id, country_code)
);

CREATE TABLE artist_style (
  artist_id BIGINT NOT NULL,
  style_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist (id) ON DELETE CASCADE,
  FOREIGN KEY (style_id) REFERENCES style (id) ON DELETE CASCADE,
  PRIMARY KEY (artist_id, ordering),
  UNIQUE (artist_id, style_id)
);

CREATE TABLE artist_mood (
  artist_id BIGINT NOT NULL,
  mood_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artist (id) ON DELETE CASCADE,
  FOREIGN KEY (mood_id) REFERENCES mood (id) ON DELETE CASCADE,
  PRIMARY KEY (artist_id, ordering),
  UNIQUE (artist_id, mood_id)
);

CREATE TABLE album (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  name_sort TEXT,
  name_match TEXT UNIQUE NOT NULL,
  rating NUMERIC(3, 1),
  summary TEXT NOT NULL,
  aired DATE,
  artist_id BIGINT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artist_id) REFERENCES artist (id) ON DELETE CASCADE
);

CREATE TABLE album_attachment (
  attachment_id UUID NOT NULL,
  album_id BIGINT NOT NULL,
  variant TEXT NOT NULL,
  FOREIGN KEY (attachment_id) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  PRIMARY KEY (attachment_id, album_id, variant),
  UNIQUE (album_id, variant)
);

CREATE TABLE album_genre (
  album_id BIGINT NOT NULL,
  genre_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE,
  PRIMARY KEY (album_id, ordering),
  UNIQUE (album_id, genre_id)
);

CREATE TABLE album_collection (
  album_id BIGINT NOT NULL,
  collection_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (collection_id) REFERENCES collection (id) ON DELETE CASCADE,
  PRIMARY KEY (album_id, ordering),
  UNIQUE (album_id, collection_id)
);

CREATE TABLE album_studio (
  album_id BIGINT NOT NULL,
  studio_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (studio_id) REFERENCES studio (id) ON DELETE CASCADE,
  PRIMARY KEY (album_id, ordering),
  UNIQUE (album_id, studio_id)
);

CREATE TABLE album_country (
  album_id BIGINT NOT NULL,
  country_code TEXT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (country_code) REFERENCES country (code) ON DELETE CASCADE,
  PRIMARY KEY (album_id, ordering),
  UNIQUE (album_id, country_code)
);

CREATE TABLE album_style (
  album_id BIGINT NOT NULL,
  style_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (style_id) REFERENCES style (id) ON DELETE CASCADE,
  PRIMARY KEY (album_id, ordering),
  UNIQUE (album_id, style_id)
);

CREATE TABLE album_mood (
  album_id BIGINT NOT NULL,
  mood_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  FOREIGN KEY (mood_id) REFERENCES mood (id) ON DELETE CASCADE,
  PRIMARY KEY (album_id, ordering),
  UNIQUE (album_id, mood_id)
);

CREATE TABLE track (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  name_sort TEXT,
  rating NUMERIC(3, 1),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE track_genre (
  track_id BIGINT NOT NULL,
  genre_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE,
  FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE,
  PRIMARY KEY (track_id, ordering),
  UNIQUE (track_id, genre_id)
);

CREATE TABLE track_mood (
  track_id BIGINT NOT NULL,
  mood_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE,
  FOREIGN KEY (mood_id) REFERENCES mood (id) ON DELETE CASCADE,
  PRIMARY KEY (track_id, ordering),
  UNIQUE (track_id, mood_id)
);

CREATE TABLE album_track (
  album_id BIGINT NOT NULL,
  track_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  disk INTEGER NOT NULL,
  FOREIGN KEY (track_id) REFERENCES track (id) ON DELETE CASCADE,
  FOREIGN KEY (album_id) REFERENCES album (id) ON DELETE CASCADE,
  PRIMARY KEY (track_id, disk, ordering),
  UNIQUE (album_id, track_id)
);

CREATE TABLE movie (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  name_sort TEXT,
  name_original TEXT[],
  name_match TEXT UNIQUE NOT NULL,
  content_rating TEXT NOT NULL,
  aired DATE,
  tagline TEXT NOT NULL,
  rating NUMERIC(3, 1),
  summary TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movie_attachment (
  attachment_id UUID NOT NULL,
  movie_id BIGINT NOT NULL,
  variant TEXT NOT NULL,
  FOREIGN KEY (attachment_id) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE,
  PRIMARY KEY (attachment_id, movie_id, variant),
  UNIQUE (movie_id, variant)
);

CREATE TABLE movie_genre (
  movie_id BIGINT NOT NULL,
  genre_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE,
  FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE,
  PRIMARY KEY (movie_id, ordering),
  UNIQUE (movie_id, genre_id)
);

CREATE TABLE movie_collection (
  movie_id BIGINT NOT NULL,
  collection_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE,
  FOREIGN KEY (collection_id) REFERENCES collection (id) ON DELETE CASCADE,
  PRIMARY KEY (movie_id, ordering),
  UNIQUE (movie_id, collection_id)
);

CREATE TABLE movie_studio (
  movie_id BIGINT NOT NULL,
  studio_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE,
  FOREIGN KEY (studio_id) REFERENCES studio (id) ON DELETE CASCADE,
  PRIMARY KEY (movie_id, ordering),
  UNIQUE (movie_id, studio_id)
);

CREATE TABLE movie_country (
  movie_id BIGINT NOT NULL,
  country_code TEXT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE,
  FOREIGN KEY (country_code) REFERENCES country (code) ON DELETE CASCADE,
  PRIMARY KEY (movie_id, ordering),
  UNIQUE (movie_id, country_code)
);

CREATE TABLE movie_staff (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  movie_id BIGINT NOT NULL,
  staff_type TEXT NOT NULL,
  person_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  staff_name TEXT,
  FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  UNIQUE (movie_id, staff_type, ordering),
  UNIQUE (movie_id, staff_type, person_id)
);

CREATE TABLE show (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  name_sort TEXT,
  name_original TEXT[],
  name_match TEXT UNIQUE NOT NULL,
  content_rating TEXT NOT NULL,
  aired DATE,
  tagline TEXT NOT NULL,
  rating NUMERIC(3, 1),
  summary TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE show_attachment (
  attachment_id UUID NOT NULL,
  show_id BIGINT NOT NULL,
  variant TEXT NOT NULL,
  FOREIGN KEY (attachment_id) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE,
  PRIMARY KEY (attachment_id, show_id, variant),
  UNIQUE (show_id, variant)
);

CREATE TABLE show_genre (
  show_id BIGINT NOT NULL,
  genre_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE,
  FOREIGN KEY (genre_id) REFERENCES genre (id) ON DELETE CASCADE,
  PRIMARY KEY (show_id, ordering),
  UNIQUE (show_id, genre_id)
);

CREATE TABLE show_collection (
  show_id BIGINT NOT NULL,
  collection_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE,
  FOREIGN KEY (collection_id) REFERENCES collection (id) ON DELETE CASCADE,
  PRIMARY KEY (show_id, ordering),
  UNIQUE (show_id, collection_id)
);

CREATE TABLE show_season (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  show_id BIGINT NOT NULL,
  name TEXT NOT NULL,
  season INTEGER NOT NULL,
  summary TEXT NOT NULL,
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE,
  UNIQUE (show_id, season)
);

CREATE TABLE show_staff (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  show_id BIGINT NOT NULL,
  staff_type TEXT NOT NULL,
  person_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  staff_name TEXT,
  FOREIGN KEY (show_id) REFERENCES show (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  UNIQUE (show_id, staff_type, ordering),
  UNIQUE (show_id, staff_type, person_id)
);

CREATE TABLE episode (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT[] NOT NULL,
  name_sort TEXT,
  name_original TEXT[],
  content_rating TEXT NOT NULL,
  aired DATE,
  rating NUMERIC(3, 1),
  summary TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE episode_attachment (
  attachment_id UUID NOT NULL,
  episode_id BIGINT NOT NULL,
  variant TEXT NOT NULL,
  FOREIGN KEY (attachment_id) REFERENCES attachment (id) ON DELETE CASCADE,
  FOREIGN KEY (episode_id) REFERENCES episode (id) ON DELETE CASCADE,
  PRIMARY KEY (attachment_id, episode_id, variant),
  UNIQUE (episode_id, variant)
);

CREATE TABLE episode_staff (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  episode_id BIGINT NOT NULL,
  staff_type TEXT NOT NULL,
  person_id BIGINT NOT NULL,
  ordering INTEGER NOT NULL,
  staff_name TEXT,
  FOREIGN KEY (episode_id) REFERENCES episode (id) ON DELETE CASCADE,
  FOREIGN KEY (person_id) REFERENCES person (id) ON DELETE CASCADE,
  UNIQUE (episode_id, staff_type, ordering),
  UNIQUE (episode_id, staff_type, person_id)
);

INSERT INTO version(version) VALUES ('v1');