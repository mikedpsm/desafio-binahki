DROP TABLE IF EXISTS "timer";
DROP TABLE IF EXISTS "timer_user";

CREATE TABLE "timer" (
	id serial PRIMARY KEY,
    activity varchar(60) NOT NULL,
    sampleNumber int default NULL,
  	timeActive bigint NOT NULL,
    startDay varchar(30) NOT NULL,
    endDay varchar(30) NOT NULL
    /* user_id int NOT NULL,
    FOREIGN KEY (user_id) references timeruser (id) */
);

CREATE TABLE "timer_user" (
	id serial PRIMARY KEY,
    username varchar(40) NOT NULL,
    userpassword text NOT NULL
);