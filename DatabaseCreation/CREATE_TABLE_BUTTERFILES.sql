CREATE TABLE Butterflies (
    butterfly_id SERIAL PRIMARY KEY,
    wing_span DECIMAL (5, 2), -- Again assuming it's a numerical value, and likely in "cm" because Metric -\_('v ')_/-
    migration_pattern VARCHAR(255) CHECK (migration_pattern IN ('Seasonal', 'Nomadic', 'Non-migratory') OR migration_pattern IS NOT NULL), -- I want the butterflies migration pattern to be able to be described as either free text or by choosing one of the three predescribed values.
    insect_id INT REFERENCES Insects(insect_id)
);