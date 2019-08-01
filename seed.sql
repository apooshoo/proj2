INSERT INTO users (username, password) VALUES ('jon', 'joy');
INSERT INTO users (username, password) VALUES ('joy', 'jon');

INSERT INTO items (name, amount, recurring, creditor, user_id) VALUES ('RENT', 1000, true, 'Junathan', 1);
INSERT INTO items (name, amount, recurring, creditor, user_id) VALUES ('INSURANCE', 200, true, 'Janathan', 1);
INSERT INTO items (name, amount, recurring, creditor, user_id) VALUES ('LUNCH MONEY', 20, false, 'Junathan', 2);

UPDATE items SET due_date = make_timestamptz(2100, 12, 12, 0, 0, 0) WHERE id = 1;
UPDATE items SET due_date = make_timestamptz(2100, 12, 12, 0, 0, 0) WHERE id = 2;
UPDATE items SET due_date = make_timestamptz(2100, 12, 12, 0, 0, 0) WHERE id = 3;

-- CREATE TABLE IF NOT EXISTS item (
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT,
-- 	amount TEXT,
-- recurring BOOLEAN,
-- 	due_date TEXT,
-- 	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
-- 	user_id INTEGER
-- );