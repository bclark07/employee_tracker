DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(9,2),
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role (id)
  --FOREIGN KEY (manager_id) REFERENCES employee (id) --This needs to reference the employee ID to link employee to their manager, does not work in this format
);

-- INSERT INTO department (name) VALUES ("HR"), ("Sales"), ("Accounting");
-- INSERT INTO role (title, salary, department_id) VALUES ("boss", 1170345.84, 3), ("p1", 122345.94, 1), ("p2", 600345.94, 1), ("p2", 30345.24, 2);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Mary", "Watts", 1, 2), ("Joan", "London", 1, 2), ("Jefferson", "Kazzam", 4, 1);
-- SELECT*FROM employee;

