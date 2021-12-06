CREATE TABLE attachment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tag_id UUID,
  tag_category_id UUID,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE SET NULL,
  FOREIGN KEY (tag_category_id) REFERENCES tag_category (id) ON DELETE SET NULL
);
