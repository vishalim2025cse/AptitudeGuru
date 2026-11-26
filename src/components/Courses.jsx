import { useEffect, useState } from "react";

const banners = [
  {
    title: "Learners Today, Leaders Tomorrow",
    text: (
      <>
        With our continuous research and development, we provide
        <br />
        you with an excellent Aptitude training.
      </>
    ),
  },
  {
    title: "Practice. Perform. Prosper.",
    text: (
      <>
        Structured lessons and mock tests that keep you
        <br />
        interview-ready all year round.
      </>
    ),
  },
];

// Add your courses here, e.g. { title: "Aptitude", desc: "..." }
const courses = [];

export default function Courses() {
  const [index, setIndex] = useState(0);

  // auto-advance every 5 seconds
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);

  const b = banners[index];

  return (
    <section className="courses" id="courses">
      <div className="banner-wrap">
        <div className="banner" key={index}>
          <h3>{b.title}</h3>
          <p>{b.text}</p>
        </div>
      </div>

      <h2 className="courses-title">Our Courses</h2>
      <p className="courses-sub">
        Explore a wide range of curated courses for every learner. Structured to
        <br />
        enhance knowledge, skills, and career growth.
      </p>

      <div className="course-grid">
        {courses.map((c) => (
          <div className="course-card" key={c.title}>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
