

\c handyhelpers;

CREATE TABLE users (
  id serial primary key,
  userName varchar(60),
  passWord varchar(20),
  phone varchar(20),
  photo varchar(225)
);

CREATE TABLE jobListing (
  id serial primary key,
  postDay date,
  completed boolean,
  pending boolean,
  posterId integer references users(id),
  fullfillerId integer references users(id),
  jobDescription varchar(255)
);


