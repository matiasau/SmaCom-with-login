CREATE TABLE user_stats
(
event_id int NOT NULL AUTO_INCREMENT,
user_id int,
loginTime bigint,
logoutTime bigint,
logoutPositionX int,
logoutPositionY int,
PRIMARY KEY (event_id),
FOREIGN KEY (user_id) REFERENCES users(id)
)