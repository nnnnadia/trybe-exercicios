SET SQL_SAFE_UPDATES = 0;

UPDATE `employees`
SET `phone_number` = REPLACE(`phone_number`, '515.', '777.')
WHERE `phone_number` LIKE '515.%';

SELECT * FROM `employees`;