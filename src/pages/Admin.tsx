import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Loader2, Lock, LogOut } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { supabase } from "../lib/supabase";
import {
  fetchContactsWithPrayers,
  signIn,
  signOut,
  type ContactWithPrayers,
} from "../services/adminService";

function LoginForm({ onSignedIn }: { onSignedIn: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signIn(email, password);
      onSignedIn();
    } catch {
      setError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-md mx-auto p-8 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-900 mx-auto mb-4">
        <Lock size={22} />
      </div>

      <h1 className="text-2xl font-bold text-blue-900 text-center mb-6">
        Admin Sign In
      </h1>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
          Username
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
      </div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition"
      >
        {loading && <Loader2 className="animate-spin" size={20} />}
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

function RequestsTable({ onSignOut }: { onSignOut: () => void }) {
  const [contacts, setContacts] = useState<ContactWithPrayers[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchContactsWithPrayers()
      .then(setContacts)
      .catch(() => setError("Could not load visitor requests."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">
          Visitor & Prayer Requests
        </h1>

        <button
          onClick={onSignOut}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-900"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>

      {loading && (
        <p className="text-gray-500 flex items-center gap-2">
          <Loader2 className="animate-spin" size={18} /> Loading...
        </p>
      )}

      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && contacts.length === 0 && (
        <p className="text-gray-500">No submissions yet.</p>
      )}

      {!loading && !error && contacts.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-500">
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Phone</th>
                <th className="py-3 pr-4">Prayer Request</th>
                <th className="py-3 pr-4">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.contact_uuid} className="border-b border-gray-100 align-top">
                  <td className="py-3 pr-4 font-medium text-gray-800">
                    {contact.full_name}
                  </td>
                  <td className="py-3 pr-4 text-gray-600">
                    {contact.email || "—"}
                  </td>
                  <td className="py-3 pr-4 text-gray-600">
                    {contact.phone || "—"}
                  </td>
                  <td className="py-3 pr-4 text-gray-600">
                    {contact.prayer_requests.length > 0
                      ? contact.prayer_requests
                          .map((p) => p.prayer_request)
                          .join("; ")
                      : "—"}
                  </td>
                  <td className="py-3 pr-4 text-gray-500 whitespace-nowrap">
                    {new Date(contact.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Admin() {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCheckingSession(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-5xl mx-auto px-6">
          {checkingSession ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : session ? (
            <RequestsTable onSignOut={signOut} />
          ) : (
            <LoginForm onSignedIn={() => {}} />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Admin;
