//login
INSERT INTO user_stats (user_id, loginTime)
VALUES (2,1000000005); 

//logout
INSERT INTO user_stats (user_id, loginTime, logoutTime, logoutPositionX, logoutPositionY)
VALUES (2,1000000005, 1000000006, 15, 15); 

UPDATE user_stats
SET logoutTime = 1000000006, logoutPositionX = 15, logoutPositionY = 15
WHERE event_id user_id = 2;

//select latest event_id with user_id
SELECT TOP 1 event_id
FROM user_stats
WHERE user_id = 2
ORDER BY event_id DESC