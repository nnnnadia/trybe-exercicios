SELECT
	t.name, t.location, m.title, m.year
FROM theater AS t
RIGHT JOIN movies AS m
ON t.id = m.theater_id
ORDER BY t.name;