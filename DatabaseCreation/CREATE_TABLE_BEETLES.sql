CREATE TABLE Beetles (
    beetle_id SERIAL PRIMARY KEY,
    shell_hardness VARCHAR(255), -- Measured based on how many times it's body weight a beetle can withstand (could be null based on available info)
    special_feature VARCHAR(255), -- Some beetles have special characteristics / behaviors, such as the clicker beetle or atlas beetles impressive size and unique horns
    insect_id INT REFERENCES Insects(insect_id)
);