CREATE TABLE person_similar (
  person_a_id UUID NOT NULL,
  person_b_id UUID NOT NULL,
  FOREIGN KEY (person_a_id) REFERENCES person (id) ON DELETE CASCADE,
  FOREIGN KEY (person_b_id) REFERENCES person (id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX person_similar_unique ON person_similar (person_a_id UUID, person_b_id UUID);
