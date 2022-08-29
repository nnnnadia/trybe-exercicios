SELECT `department_id`, ROUND(AVG(`salary`), 2) AS `avg_salary`, COUNT(*) AS `num_of_employees`
FROM `employees`
GROUP BY `department_id`
HAVING `num_of_employees` > 10;
