SELECT a.title,a.content,u.email FROM article AS a JOIN user AS u ON u.ID =a.userID ;
SELECT * FROM article LIMIT 6,6;