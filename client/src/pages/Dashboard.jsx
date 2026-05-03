import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'W1', score: 62 },
  { week: 'W2', score: 70 },
  { week: 'W3', score: 81 },
  { week: 'W4', score: 88 }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold">Analytics Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Problems Solved', '124'],
          ['Mock Interviews', '18'],
          ['Current Streak', '15 days']
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-bold text-cyan-300">{value}</p>
          </div>
        ))}
      </div>
      <div className="h-80 rounded-xl border border-slate-800 bg-slate-900 p-4">
        <h3 className="mb-4 text-lg font-medium">Weekly Interview Readiness Score</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="week" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip />
            <Bar dataKey="score" fill="#22d3ee" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
