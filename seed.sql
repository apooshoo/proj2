INSERT INTO users (username, password) VALUES ('jon', 'joy');
INSERT INTO users (username, password) VALUES ('joy', 'jon');

INSERT INTO items (name, amount, recurring, due_date, creditor, user_id) VALUES ('RENT', 1000, true, 'placeholder 26', 'Junathan', 1);
INSERT INTO items (name, amount, recurring, due_date, creditor, user_id) VALUES ('INSURANCE', 200, true, 'placeholder 16', 'Janathan', 1);
INSERT INTO items (name, amount, recurring, due_date, creditor, user_id) VALUES ('LUNCH MONEY', 20, false, 'placeholder 6', 'Junathan', 2);

-- CREATE TABLE IF NOT EXISTS item (
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT,
-- 	amount TEXT,
-- recurring BOOLEAN,
-- 	due_date TEXT,
-- 	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
-- 	user_id INTEGER
-- );