CREATE TABLE Moths (
    moth_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
	species VARCHAR(255),
	color VARCHAR(50),
	size DECIMAL (5, 2),
	habitat VARCHAR(255),
    wing_span DECIMAL (5, 2), -- Measured in decimals
    nocturnal BOOLEAN
);