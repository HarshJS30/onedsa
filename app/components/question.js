import questions from "../../data/questions";

function getTodayIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);


  return dayOfYear % questions.length;
}

export default function DailyQuestion() {
  const todayIndex = getTodayIndex();
  const todayQuestion = questions[todayIndex];

  return (
    <div className="question">
      <h1>Today's DSA Question</h1>
      <h2>{todayQuestion.title}</h2>
      <p className="diff">{todayQuestion.difficulty}</p>
      <p className="tags">Tags: {todayQuestion.tags.join(", ")}</p>
      <p className="desc">{todayQuestion.description}</p>
      <a href={todayQuestion.url} target="_blank" rel="noopener noreferrer"  className="link">
        Try this question
      </a>
    </div>
  );
}
