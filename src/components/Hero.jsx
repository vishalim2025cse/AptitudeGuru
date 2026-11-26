export default function Hero() {
  const s = {
    title: "Aptitude Guru Hem",
    heading: (
      <>
        At AGH, we shape futures and build skills that
        <br />
        <em>ignite your career journey.</em>
      </>
    ),
    body: (
      <>
        Where Success Meets Opportunity! Are you ready to embark on a
        transformative journey towards success? At Aptitude Guru Hem, we are
        committed to providing you with the essential skills and knowledge to
        excel in your professional endeavors. Our expert training in aptitude
        and coding equips you to conquer every challenge, from company
        interview assessments to prestigious coding platforms like{" "}
        <a href="https://leetcode.com" target="_blank" rel="noreferrer">LeetCode</a>,{" "}
        <a href="https://www.geeksforgeeks.org" target="_blank" rel="noreferrer">GeeksForGeeks</a>,{" "}
        <a href="https://www.hackerrank.com" target="_blank" rel="noreferrer">HackerRank</a>, and more.
      </>
    ),
    primary: "Start Your Learning",
    decorated: true,
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-slide">
        {s.decorated && <FloatingIcons />}
        <div className="hero-content">
          <h1>{s.title}</h1>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
          <div className="btn-row">
            <a href="#courses" className="btn btn-grey">{s.primary}</a>
            <a href="#" className="btn btn-red">Join a Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcons() {
  return (
    <>
      <span className="float f-trophy">🏆</span>
      <span className="float f-book">📕</span>
      <span className="float f-branch">
        <svg viewBox="0 0 64 64" width="80" height="80" fill="none" stroke="#1f7a6d" strokeWidth="7" strokeLinecap="round">
          <circle cx="14" cy="12" r="6" fill="#1f7a6d" />
          <circle cx="14" cy="52" r="6" fill="#1f7a6d" />
          <circle cx="50" cy="12" r="6" fill="#1f7a6d" />
          <path d="M14 18v28M50 18c0 18-36 6-36 28" />
        </svg>
      </span>
      <span className="float f-hand">🤝</span>
      <span className="float f-pencil">✏️</span>
      <span className="float f-code">&lt;/&gt;</span>
      <span className="float f-chip">
        <svg viewBox="0 0 64 64" width="90" height="90">
          <rect x="14" y="14" width="36" height="36" rx="6" fill="#7b61ff" />
          <rect x="24" y="24" width="16" height="16" rx="3" fill="#fff" />
          <g stroke="#7b61ff" strokeWidth="4" strokeLinecap="round">
            <path d="M22 6v8M32 6v8M42 6v8M22 50v8M32 50v8M42 50v8M6 22h8M6 32h8M6 42h8M50 22h8M50 32h8M50 42h8" />
          </g>
        </svg>
      </span>
      <span className="float f-bug">🐞</span>
    </>
  );
}
