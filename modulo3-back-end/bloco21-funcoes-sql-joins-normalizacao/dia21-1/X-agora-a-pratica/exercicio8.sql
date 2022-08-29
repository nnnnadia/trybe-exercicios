SELECT
	job_id, COUNT(*), ROUND(AVG(salary), 2), SUM(salary)
FROM employees
WHERE job_id = "IT_PROG"
GROUP BY job_id;