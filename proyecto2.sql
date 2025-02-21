create database laboratorio;
use laboratorio;

create table tpacientes (
    idpacientes int primary key auto_increment,
    nombre varchar(50) not null,
    apellidopaterno varchar(50) not null,
    apellidomaterno varchar(50) not null, 
    fechanacimiento date not null,
    telefono varchar(15),
    email varchar(50),
    direccion varchar(100),
    tiposangre varchar(5),
    alergias varchar(255)
);

create table tmedicos (
    idmedicos int primary key auto_increment,
    nombre varchar(50) not null,
    apellidopaterno varchar(50) not null,
    apellidomaterno varchar(50) not null,
    especialidad varchar(30) not null,
    telefono varchar(15)
);

create table tsolicitud (
    idsolicitud int primary key auto_increment,
    fechasolicitud datetime not null,
    idpacientes int not null,
    idmedicos int not null,
    foreign key (idpacientes) references tpacientes(idpacientes) on delete cascade,
    foreign key (idmedicos) references tmedicos(idmedicos) on delete cascade
);

create table treporte (
    idreporte int primary key auto_increment,
    fechainicio date not null,
    fechaentrega date not null,
    prioridad varchar(20),
    observaciones varchar(100), 
    estado varchar(20),
    idsolicitud int not null,
    foreign key (idsolicitud) references tsolicitud(idsolicitud) on delete cascade
);

create table tarealaboratorio (
    idarea int primary key auto_increment,
    nombre varchar(50) not null,
    descripcion varchar(100)
);

create table tprueba (
    idprueba int primary key auto_increment,
    nombre varchar(50) not null,
    descripcion varchar(100),
    valorreferencia double not null,
    idarea int not null,
    foreign key (idarea) references tarealaboratorio(idarea) on delete cascade
);

create table tdetallesolicitud (
    iddetallesol int primary key auto_increment,
    idsolicitud int not null,
    idprueba int not null,
    foreign key (idsolicitud) references tsolicitud(idsolicitud) on delete cascade,
    foreign key (idprueba) references tprueba(idprueba) on delete cascade
);

create table tresultados (
    idresultado int primary key auto_increment,
    iddetallesol int not null,
    resultado double not null,
    unidad varchar(20),
    foreign key (iddetallesol) references tdetallesolicitud(iddetallesol) on delete cascade
);
