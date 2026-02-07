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

    INSERT INTO coords(id, lat, long, date) VALUES('b0973baf-aaa1-4beb-a15b-7f47fbc64121', 55.705350037621415, 13.195498537795453, 1770487587732)
 
"