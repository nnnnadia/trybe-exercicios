SELECT
	m.*
FROM movies AS m
JOIN box_office AS b
ON m.id = b.movie_id
WHERE theater_id IS NOT NULL
AND b.rating > 8;