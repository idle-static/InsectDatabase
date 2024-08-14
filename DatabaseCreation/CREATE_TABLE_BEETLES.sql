CREATE TABLE Beetles (
    beetle_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
	species VARCHAR(255),
	color VARCHAR(50),
	size DECIMAL (5, 2),
	habitat VARCHAR(255),
    shell_hardness VARCHAR(255), -- Measured based on how many times it's body weight a beetle can withstand (could be null based on available info)
    special_feature VARCHAR(255) -- Some beetles have special characteristics / behaviors, such as the clicker beetle or atlas beetles impressive size and unique horns
);