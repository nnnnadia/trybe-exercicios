SELECT m.title, b.rating FROM box_office AS b
INNER JOIN movies AS m
ON b.movie_id = m.id
ORDER BY b.rating DESC;