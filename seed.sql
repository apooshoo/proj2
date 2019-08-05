
INSERT INTO items (name, amount, recurring, creditor, user_id) VALUES ('RENT', 1000, true, 'Junathan', 1);
INSERT INTO items (name, amount, recurring, creditor, user_id) VALUES ('INSURANCE', 200, true, 'Janathan', 1);
INSERT INTO items (name, amount, recurring, creditor, user_id) VALUES ('LUNCH MONEY', 20, false, 'Jonathan', 1);

UPDATE items SET due_date = make_timestamptz(2100, 12, 12, 0, 0, 0) WHERE id = 1;
UPDATE items SET due_date = make_timestamptz(2100, 12, 12, 0, 0, 0) WHERE id = 2;
UPDATE items SET due_date = make_timestamptz(2100, 12, 12, 0, 0, 0) WHERE id = 3;

INSERT INTO settings (user_id, pay_amount, save_amount) VALUES (10, 4000, 500) ;

UPDATE settings SET pay_day = current_timestamp, next_pay_day = make_timestamptz(2020, 12, 12, 0, 0, 0) WHERE id = 1;



-- CREATE TABLE IF NOT EXISTS item (
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT,
-- 	amount TEXT,
-- recurring BOOLEAN,
-- 	due_date TEXT,
-- 	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
-- 	user_id INTEGER
-- );