const pg = require('pg');

const dbConfig = {
  host: 'localhost',
  user: '',
  password: '',
  database: 'handyhelpers'
};


// const connection = new pg.Client(dbConfig);
// connection.connect();

const connection = new pg.Pool(dbConfig);


connection.connect(err => {
  if(err){
    console.log(err);
  } else {
    console.log("connect pg");
  }
});

const getJobs = () => {
  const command = `
    SELECT j.*, u.username FROM joblisting j, users u WHERE u.id=j.posterid AND j.completed=false ORDER BY id DESC`;
  return connection.query(command);
};


const postJob = (posterid, jobdescription) => {
  const command = `
  INSERT INTO joblisting(postday, completed, pending, posterid, fullfillerid, jobdescription) VALUES (now(),false,false,($1),null,($2))`;
  return connection.query(command, [posterid, jobdescription]);
};

const putPending = (fullfillerid, id) => {
  const command = `
  UPDATE joblisting SET pending=true, fullfillerid=($1) WHERE id=($2)`;
  return connection.query(command, [fullfillerid, id]);
};

// const postAnswer = (id, body, name, email, photos) => {
//   const command = `
//     INSERT INTO answers(question_id, body, date, answerer_name, answerer_email, reported, helpfulness) VALUES (($1), ($2), now(), ($3), ($4), FALSE, 0)`;
//   return connection.query(command, [id, body, name, email]);
// };

module.exports = {
  getJobs,
  postJob,
  putPending,
//   getAnswers,
//   putAnswerReported,
//   putQuestionReported,
//   putAnswerHelpful,
//   putQuestionHelpful,
//   postQuestion,
//   postAnswer,
};
