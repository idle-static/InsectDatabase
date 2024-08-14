CREATE TABLE Insects (
	insect_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    species VARCHAR(100) NOT NULL,
    color VARCHAR(50),
    size DECIMAL(5, 2),  -- Assuming size is a numeric value (e.g., length in centimeters)
    habitat VARCHAR(100)
);