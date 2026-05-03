const problems = [
  { title: 'Two Sum', difficulty: 'Easy', topic: 'Arrays' },
  { title: 'LRU Cache', difficulty: 'Medium', topic: 'Design' },
  { title: 'Merge K Sorted Lists', difficulty: 'Hard', topic: 'Linked List' }
];

export default function CodingPractice() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Coding Practice</h2>
      <p className="mt-2 text-slate-400">Practice curated coding questions with AI hints and complexity feedback.</p>
      <div className="mt-6 space-y-3">
        {problems.map((problem) => (
          <div key={problem.title} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h3 className="text-lg font-medium">{problem.title}</h3>
            <p className="text-sm text-slate-400">{problem.topic}</p>
            <span className="mt-2 inline-block rounded-full bg-cyan-800/60 px-3 py-1 text-xs">{problem.difficulty}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
