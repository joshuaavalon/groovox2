CREATE TABLE _artist_similar (
  A UUID NOT NULL,
  B UUID NOT NULL,
  FOREIGN KEY (A) REFERENCES artist (id) ON DELETE CASCADE,
  FOREIGN KEY (B) REFERENCES artist (id) ON DELETE CASCADE
);
