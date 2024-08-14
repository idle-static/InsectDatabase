CREATE TABLE Moths (
    moth_id SERIAL PRIMARY KEY,
    wing_span DECIMAL (5, 2), -- Measured in decimals
    nocturnal BOOLEAN,
    insect_id INT REFERENCES Insects(insect_id)
);