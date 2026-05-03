const progress = [
  { skill: 'DSA', completion: 78 },
  { skill: 'System Design', completion: 61 },
  { skill: 'Behavioral', completion: 84 }
];

export default function ProgressTracking() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Progress Tracking</h2>
      <div className="mt-6 space-y-4">
        {progress.map((item) => (
          <div key={item.skill} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span>{item.skill}</span>
              <span>{item.completion}%</span>
            </div>
            <div className="h-2 rounded bg-slate-700">
              <div className="h-2 rounded bg-cyan-400" style={{ width: `${item.completion}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
