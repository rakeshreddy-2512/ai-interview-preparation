const sessions = [
  { role: 'Frontend Engineer', mode: 'Behavioral + Technical', duration: '45 min' },
  { role: 'Backend Engineer', mode: 'System Design', duration: '60 min' }
];

export default function MockInterviews() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Mock Interviews</h2>
      <p className="mt-2 text-slate-400">Schedule AI-led interviews with real-time rubrics and actionable feedback.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {sessions.map((session) => (
          <div key={session.role} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-xl font-medium text-cyan-200">{session.role}</h3>
            <p className="mt-2 text-slate-300">{session.mode}</p>
            <p className="text-sm text-slate-400">Duration: {session.duration}</p>
            <button className="mt-4 rounded bg-cyan-600 px-4 py-2 text-sm font-medium">Start Session</button>
          </div>
        ))}
      </div>
    </div>
  );
}
