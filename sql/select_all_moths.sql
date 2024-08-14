SELECT m.moth_id, i.name, i.species, i.color, i.size, i.habitat
FROM moths m
JOIN insects i ON m.insect_id = i.insect_id;
