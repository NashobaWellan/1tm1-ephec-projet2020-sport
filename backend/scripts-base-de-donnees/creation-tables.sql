create table tbjoueur (
        joueurId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
        joueur char(30) not null,
CONSTRAINT pk_tbjoueur PRIMARY KEY (joueurId),
);

create table tbsport (
        sportId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
        sport char(30) not null,
        
constraint pk_tbsport PRIMARY KEY (sportId),
);

create table tbtournoi ( 
        tournoiId INTEGER NOT NULL DEFAULT AUTOINCREMENT,
        tournoi char(30) not null,
	sportId char(30) not null,
CONSTRAINT pk_tbtournoi PRIMARY KEY (tournoiId),
constraint fk_tbsport_tbtournoi foreign key (sport_sportId) references tbsport (sportId)
);

create table tbannee (
        tournoiId char(2) not null,
        joueurId char(2) not null,
        annee char(4) not null,
CONSTRAINT pk_tbannee PRIMARY KEY (tournoiId, joueurId),
constraint fk_tbannee_tbjoueur foreign  key (joueur_joueurId) reference tbjoueur (joueurId),
constraint fk_tbannee_tbtournoi foreign key (tournoi_tournoiId) reference tbtournoi (tournoiId)
);
