"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import committees from "@/lib/committees.json"; 
import events from "@/lib/events.json";
import team from "@/lib/team.json";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Grab initial query from URL
  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);

  // Keep URL in sync when query changes
  useEffect(() => {
    const url = query ? `/search?query=${encodeURIComponent(query)}` : "/search";
    router.replace(url); // updates URL without full reload
  }, [query, router]);

  const q = query.toLowerCase();

  const filteredCommittees = committees.filter((c) =>
    c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
  );

  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)
  );

  const filteredTeam = team.filter((t) =>
    t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q)
  );

  const noResults = 
    filteredCommittees.length === 0 &&
    filteredEvents.length === 0 &&
    filteredTeam.length === 0;

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Search</h1>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search committees, events, team..."
        className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-white mb-6 focus:outline-none focus:border-purple-500"
      />

      {query && (
        <h2 className="mb-4 text-lg text-gray-400">
          Showing results for: <span className="text-purple-400">"{query}"</span>
        </h2>
      )}

      {noResults && query && (
        <p className="text-gray-400 italic">No results found.</p>
      )}

      <div className="space-y-10">
        {/* Committees */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Committees ({filteredCommittees.length})
          </h2>
          {filteredCommittees.length > 0 ? (
            <ul className="space-y-2">
              {filteredCommittees.map((c, idx) => (
                <li key={idx} className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition">
                  <Link href={`/committees/${c.id}`}>
                    <span className="font-medium text-green-400">{c.name}</span> – {c.description}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No committees found</p>
          )}
        </section>

        {/* Events */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Events ({filteredEvents.length})
          </h2>
          {filteredEvents.length > 0 ? (
            <ul className="space-y-2">
              {filteredEvents.map((e, idx) => (
                <li key={idx} className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition">
                  <Link href={`/events/${e.id}`}>
                    <span className="font-medium text-yellow-400">{e.title}</span> – {e.description}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No events found</p>
          )}
        </section>

        {/* Team Members */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Team Members ({filteredTeam.length})
          </h2>
          {filteredTeam.length > 0 ? (
            <ul className="space-y-2">
              {filteredTeam.map((t, idx) => (
                <li key={idx} className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition">
                  <Link href={`/team/${t.id}`}>
                    <span className="font-medium text-blue-400">{t.name}</span> – {t.role}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No team members found</p>
          )}
        </section>
      </div>
    </div>
  );
}
