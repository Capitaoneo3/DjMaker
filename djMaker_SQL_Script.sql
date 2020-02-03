CREATE TABLE Usuario (
  idUsuario INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_Usr VARCHAR(255) NULL,
  email_Usr VARCHAR(255) NULL,
  senha_Usr VARCHAR(255) NULL,
  PRIMARY KEY(idUsuario)
);

CREATE TABLE Album (
  idAlbum INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Usuario_idUsuario INTEGER UNSIGNED NOT NULL,
  nome_Alb INTEGER UNSIGNED NULL,
  PRIMARY KEY(idAlbum),
  INDEX Album_FKIndex1(Usuario_idUsuario),
  FOREIGN KEY(Usuario_idUsuario)
    REFERENCES Usuario(idUsuario)
      ON DELETE CASCADE
      ON UPDATE CASCADE
);

CREATE TABLE Musica (
  idMusica INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Album_idAlbum INTEGER UNSIGNED NULL,
  Usuario_idUsuario INTEGER UNSIGNED NOT NULL,
  nome_Mus VARCHAR(255) NULL,
  caminho_Mus VARCHAR(255) NULL,
  PRIMARY KEY(idMusica),
  INDEX Musica_FKIndex1(Usuario_idUsuario),
  INDEX Musica_FKIndex2(Album_idAlbum),
  FOREIGN KEY(Usuario_idUsuario)
    REFERENCES Usuario(idUsuario)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY(Album_idAlbum)
    REFERENCES Album(idAlbum)
      ON DELETE CASCADE
      ON UPDATE CASCADE
);

CREATE TABLE Foto (
  idFoto INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Album_idAlbum INTEGER UNSIGNED NULL,
  Usuario_idUsuario INTEGER UNSIGNED NULL,
  Musica_idMusica INTEGER UNSIGNED NULL,
  caminho_Fot VARCHAR(255) NULL,
  PRIMARY KEY(idFoto),
  INDEX Foto_FKIndex1(Musica_idMusica),
  INDEX Foto_FKIndex2(Usuario_idUsuario),
  INDEX Foto_FKIndex3(Album_idAlbum),
  FOREIGN KEY(Musica_idMusica)
    REFERENCES Musica(idMusica)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY(Usuario_idUsuario)
    REFERENCES Usuario(idUsuario)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY(Album_idAlbum)
    REFERENCES Album(idAlbum)
      ON DELETE CASCADE
      ON UPDATE CASCADE
);


