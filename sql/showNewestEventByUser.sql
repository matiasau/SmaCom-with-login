SELECT event_id
FROM user_stats
WHERE user_id = '2'
ORDER BY event_id DESC
LIMIT 1;


$query = "
	SELECT
		event_id
	FROM user_stats
	WHERE
		user_id = :user_id
	ORDER BY event_id DESC
	LIMIT 1;
";