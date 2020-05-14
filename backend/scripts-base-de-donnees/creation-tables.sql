create table tbjoueur (
        joueurId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
        joueurNom char(50) not null,
	joueurPrenom char(30) not null,
PRIMARY KEY (joueurId),
);

create table tbsport (
        sportId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
        sport char(30) not null,
        
PRIMARY KEY (sportId),
);

create table tbtournoi ( 
        tournoiId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
        tournoi char(100) not null,
	sportId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
PRIMARY KEY (tournoiId),
foreign key (sportId) references tbsport (sportId)
);

create table tbannee (
        annee char(4) not null,
	joueurId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	tournoiId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
PRIMARY KEY (annee),
foreign key (joueurId) reference tbjoueur (joueurId),
foreign key (tournoiId) reference tbtournoi (tournoiId)
);
