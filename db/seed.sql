-- db/seed.sql
\c tuner;

INSERT INTO songs(name, artist, album, time, is_favorite) VALUES
    ('One More Time', 'Daft Punk', 'Discovery', '5:20', True),
    ('Harder, Better, Faster, Stronger', 'Daft Punk', 'Discovery', '3:45', False),
    ('Around the World', 'Daft Punk', 'Homework', '7:09', True),
    ('Get Lucky', 'Daft Punk featuring Pharrell Williams', 'Random Access Memories', '6:09', False),
    ('Da Funk', 'Daft Punk', 'Homework', '5:28', True),
    ('Technologic', 'Daft Punk', 'Human After All', '4:44', True),
    ('Digital Love', 'Daft Punk', 'Discovery', '4:58', False),
    ('Robot Rock', 'Daft Punk', 'Human After All', '4:47', True),
    ('Instant Crush', 'Daft Punk featuring Julian Casablancas', 'Random Access Memories', '5:37', False),
    ('Face to Face', 'Daft Punk', 'Discovery', '3:58', True),
    ('Derezzed', 'Daft Punk', 'Tron: Legacy', '1:44', False),
    ('Crescendolls', 'Daft Punk', 'Discovery', '3:31', True),
    ('Aerodynamic', 'Daft Punk', 'Discovery', '3:27', True),
    ('Voyager', 'Daft Punk', 'Discovery', '3:47', False),
    ('Superheroes', 'Daft Punk', 'Discovery', '3:57', True),
    ('High Life', 'Daft Punk', 'Discovery', '3:22', False),
    ('Something About Us', 'Daft Punk', 'Discovery', '3:51', True),
    ('Television Rules the Nation', 'Daft Punk', 'Human After All', '4:47', False),
    ('The Prime Time of Your Life', 'Daft Punk', 'Human After All', '4:23', True),
    ('Make Love', 'Daft Punk', 'Human After All', '4:48', False),
    ('The Brainwasher', 'Daft Punk', 'Human After All', '4:08', True),
    ('On/Off', 'Daft Punk', 'Human After All', '0:19', False),
    ('Emotion', 'Daft Punk', 'Human After All', '6:57', True),
    ('Give Life Back to Music', 'Daft Punk', 'Random Access Memories', '4:34', False),
    ('Giorgio by Moroder', 'Daft Punk', 'Random Access Memories', '9:04', True),
    ('Within', 'Daft Punk', 'Random Access Memories', '3:48', False),
    ('Lose Yourself to Dance', 'Daft Punk featuring Pharrell Williams', 'Random Access Memories', '5:53', True);


