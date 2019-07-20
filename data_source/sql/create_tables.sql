DROP DATABASE IF EXISTS everest_db;
create database everest_db;
USE everest_db;
DROP TABLE IF EXISTS medical_facility;
DROP TABLE IF EXISTS hospital;
DROP TABLE IF EXISTS citizen_table;
DROP TABLE IF EXISTS inventory_hospital;
DROP TABLE IF EXISTS policy;
​
CREATE TABLE IF NOT EXISTS medical_facility (user_id int NOT NULL AUTO_INCREMENT,
	 age VARCHAR (225),
	 status VARCHAR (225),
	 frequency float,
	 area VARCHAR (225),
	 year float,
	 percent_affected float,
	 situation_treated float,
	 start_date VARCHAR(225),
	 end_date VARCHAR(225),
	 situation_affected VARCHAR(225),
	 provider_name VARCHAR(225),
	 PRIMARY KEY (user_id));

CREATE TABLE IF NOT EXISTS hospital (hospital_id int NOT NULL AUTO_INCREMENT,
	 name VARCHAR (225),
	 code VARCHAR (225),
	 inventory json,
	 latitude float,
	 longitude float,
	 inventory_stock VARCHAR (225),
	 PRIMARY KEY (hospital_id));
CREATE TABLE IF NOT EXISTS citizen_table (citizen_id int NOT NULL AUTO_INCREMENT,
	 name VARCHAR (225),
	 age VARCHAR (225),
	 address VARCHAR (225),
	 status VARCHAR (225),
	 phone_no VARCHAR (225),
	 blood_group VARCHAR (225),
	 medical_condition VARCHAR (225),
	 email VARCHAR (225),
	 PRIMARY KEY (citizen_id));

CREATE TABLE IF NOT EXISTS inventory_hospital (inventory_hospital_id int NOT NULL AUTO_INCREMENT,
	 name VARCHAR (225),
	 code VARCHAR (225),
	 available_address VARCHAR (225),
	 PRIMARY KEY (inventory_hospital_id));
​
CREATE TABLE IF NOT EXISTS policy (policy_id int NOT NULL AUTO_INCREMENT,
     overall_budget float,
     hr_salary float,
     operation_amount float,
     procurment_charge float,
     services_charge float,
     analysis_charge float,
     start_date VARCHAR (225),
     end_date  VARCHAR (225),
     develpoment_charge float,
     PRIMARY KEY (policy_id)


      );
