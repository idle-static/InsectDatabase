INSERT INTO bees (bee_id, honey_production, sting_severity) VALUES (DEFAULT, $1, $2) RETURNING bee_id;