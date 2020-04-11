CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE establishment (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    current_need VARCHAR(255) NOT NULL,
    current_relief INTEGER,
    total_relief INTEGER,
    lat float8 NULL,
    lng float8 NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country CHAR(3),
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP DEFAULT NOW(),
    is_active BOOL NOT NULL DEFAULT true
);

CREATE TABLE receiver (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    establishment VARCHAR(255) NOT NULL,
    establishment_id INTEGER NOT NULL,
    created TIMESTAMP NOT NULL,
    updated TIMESTAMP DEFAULT NOW(),
    is_active BOOL NOT NULL DEFAULT true
);
