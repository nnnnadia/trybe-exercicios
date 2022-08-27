SELECT
	job_id, COUNT(*), ROUND(AVG(salary), 2), SUM(salary)
FROM employees
GROUP BY job_id;