import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login('demo-token');
      navigate('/');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold">Login</h2>
        <input className="w-full rounded bg-slate-800 p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded bg-slate-800 p-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full rounded bg-cyan-600 py-2">Sign In</button>
      </form>
    </div>
  );
}
