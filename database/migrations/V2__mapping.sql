CREATE TABLE _person_similar (
  a UUID NOT NULL,
  b UUID NOT NULL,
  FOREIGN KEY (a) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (b) REFERENCES person (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX _person_similar_ab_unique ON _person_similar (a, b);
CREATE INDEX _person_similar_b_index ON _person_similar (b);
