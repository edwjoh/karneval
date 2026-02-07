rm -rf $PWD/db.db
touch $PWD/db.db
sqlite3 $PWD/db.db "

    CREATE TABLE coords (
        id TEXT PRIMARY KEY,
        lat REAL NOT NULL,
        long REAL NOT NULL,
        date INTEGER NOT NULL
    );

    CREATE TABLE stats (
        id INTEGER,
        gets INTEGER,
        posts INTEGER
    );

    INSERT INTO stats(id, gets, posts) VALUES(1, 0, 0);


 
"