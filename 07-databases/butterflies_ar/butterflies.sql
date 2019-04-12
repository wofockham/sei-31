CREATE TABLE butterflies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT -- URL for a photo of a butterfly
);

-- seed
INSERT INTO butterflies (name, family) VALUES ('Monarch', 'Nymphalidae');
