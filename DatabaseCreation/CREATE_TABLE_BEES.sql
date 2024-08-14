CREATE TABLE Bees (
    bee_id SERIAL PRIMARY KEY,
    honey_production DECIMAL (5, 2), --  Describes the liters of honey produced yearly by a single hive
    sting_severity VARCHAR(2), -- Describes the pain level of a bee's sting based on the Schmidt sting pain index
    insect_id INT REFERENCES Insects(insect_id)
);