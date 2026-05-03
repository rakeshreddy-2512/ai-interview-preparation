import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/practice', label: 'Coding Practice' },
  { to: '/mock-interviews', label: 'Mock Interviews' },
  { to: '/progress', label: 'Progress Tracking' }
];

export default function Layout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">AI Interview Prep</h1>
          <nav className="flex gap-5 text-sm">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'text-cyan-300' : 'text-slate-300')}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="text-sm text-slate-300">
            {user && <span className="mr-3">{user.name}</span>}
            <button onClick={logout} className="rounded bg-cyan-600 px-3 py-1 text-white hover:bg-cyan-500">Logout</button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
