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

    INSERT INTO coords(id, lat, long, date) VALUES('a1b2c3d4-e5f6-7890-abcd-ef1234567890', '55.70458', '13.19112', 1770467503000);
INSERT INTO coords(id, lat, long, date) VALUES('b2c3d4e5-f6a7-8901-bcde-f12345678901', '55.70512', '13.19205', 1770468343000);
INSERT INTO coords(id, lat, long, date) VALUES('c3d4e5f6-a7b8-9012-cdef-123456789012', '55.70578', '13.19318', 1770471043000);
INSERT INTO coords(id, lat, long, date) VALUES('d4e5f6a7-b8c9-0123-def1-234567890123', '55.70631', '13.19428', 1770472243000);
INSERT INTO coords(id, lat, long, date) VALUES('e5f6a7b8-c9d0-1234-ef12-345678901234', '55.70695', '13.19551', 1770475843000);
INSERT INTO coords(id, lat, long, date) VALUES('f6a7b8c9-d0e1-2345-f123-456789012345', '55.70742', '13.19642', 1770474643000);
INSERT INTO coords(id, lat, long, date) VALUES('a7b8c9d0-e1f2-3456-1234-567890123456', '55.70809', '13.19768', 1770478243000);
"