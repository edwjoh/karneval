rm -rf $PWD/db.db
touch $PWD/db.db
sqlite3 $PWD/db.db "

    CREATE TABLE coords (
        id TEXT PRIMARY KEY,
        lat REAL NOT NULL,
        long REAL NOT NULL,
        date INTEGER NOT NULL
    );

    INSERT INTO coords(id, lat, long, date) VALUES('b0973baf-aaa1-4beb-a15b-7f47fbc64121', 55.7053500376214, 13.1954985377955, 1770487587732);
    INSERT INTO coords(id, lat, long, date) VALUES('ba756926-e5bd-41ef-b3f6-76a772e482bf', 55.7057114607951, 13.1937856407879, 1770497610789);
    INSERT INTO coords(id, lat, long, date) VALUES('637d560b-a8c4-46e1-bec7-0d96326a79c1', 55.7057955598442, 13.1938147543231, 1770497645130);
    INSERT INTO coords(id, lat, long, date) VALUES('40a3efa4-dc4e-4f5f-bbf6-250156692c73', 55.705610890055, 13.1939654159256, 1770497795846); 
"