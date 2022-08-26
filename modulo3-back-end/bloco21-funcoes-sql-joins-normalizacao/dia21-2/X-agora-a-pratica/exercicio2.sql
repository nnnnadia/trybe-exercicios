SELECT m.title,	b.domestic_sales, b.international_sales FROM box_office AS b
INNER JOIN movies AS m
ON b.movie_id = m.id
WHERE b.domestic_sales < b.international_sales;