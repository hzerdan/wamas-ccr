CREATE DATABASE IF NOT EXISTS wamasc;

use wamasc;

CREATE TABLE IF NOT EXISTS lane
(
id int primary key not null auto_increment,
lane_id VARCHAR(4) 
);

CREATE TABLE IF NOT EXISTS route
(
id int primary key not null auto_increment,
route_id VARCHAR(25),
route_name VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS lane_route
(
id int primary key not null auto_increment,
route_id VARCHAR(25),
lane_id VARCHAR(25),
lane_route_deleted tinyint(1) default 1
);

INSERT INTO lane (lane_id) 
VALUES ('001'),('002'),('003'),('004'),('005'),('006'),('007'),('008'),('009'),('010'),('011'),('012'),('013'),('014'),('015'),
('016'),('017'),('018'),('019'),('020'),('021'),('022'),('023'),('024'),('025'),('026'),('027'),('028'),('029'),('030'),('031'),
('032');
 