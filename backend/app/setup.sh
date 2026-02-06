rm -rf $PWD/db.db
touch $PWD/db.db
sqlite3 $PWD/db.db "

    CREATE TABLE coords (
        id TEXT PRIMARY KEY,
        lat REAL NOT NULL,
        long REAL NOT NULL,
        date INTEGER NOT NULL
    );

    INSERT INTO coords(id, lat, long, date) VALUES('273c2010-6dcd-4c70-8700-4132857b89e3', '55.72248', '13.21280', 2);
    INSERT INTO coords(id, lat, long, date) VALUES('3d79cd91-0895-478a-b88d-074621889415', '55.69507', '13.17703', 1);
    INSERT INTO coords(id, lat, long, date) VALUES('881644b7-5f5f-4e8f-a503-f2823e16e9d9', '55.69726', '13.18571', 4);
    INSERT INTO coords(id, lat, long, date) VALUES('258c2d77-da14-4997-8cb4-7376e3edd0b4', '55.71454', '13.21047', 3);

"