-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT * FROM authors a LEFT JOIN books b on a.id = b.author_id WHERE a.id = 8;
-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT * FROM authors a LEFT JOIN books b on a.id = b.authord_id WHERE a.id = 6;
-- Find all books written by an author from China or the UK.

-- Find out how many books Albert Camus wrote.
SELECT COUNT(title) FROM books b INNER JOIN authors a ON a.id = b.author_id WHERE b.author_id = 7;

-- Find out how many books were written by US authors.

-- Find all books written after 1930 by authors from Argentina.
SELECT * FROM books b INNER JOIN authors a on a.id = b.author_id WHERE b.publication_date > 1930 AND a.nationality = 'Argentina';

-- Find all books written before 1980 by authors not from the US.

-- Find all authors whose names start with 'J'.

-- Find all books whose titles contain 'the'.

-- Find all authors who have written books with that start with the letter 'N'.
