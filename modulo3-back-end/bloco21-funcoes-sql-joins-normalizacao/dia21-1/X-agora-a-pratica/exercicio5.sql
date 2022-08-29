SELECT
	ROUND(MAX(salary), 2) AS max_salary,
  ROUND(MIN(salary), 2) AS min_salary,
  ROUND(SUM(salary), 2) AS sum_salary,
  ROUND(AVG(salary), 2) AS avg_salary
FROM employees;