"use client";

import { useSearchParams } from "next/navigation";
import committees from "@/lib/committees.json"; 
import events from "@/lib/events.json";
import team from "@/lib/team.json";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // Filter across committees, events, team
  const filteredCommittees = committees.filter((c) =>
    c.name.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)
  );

  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query)
  );

  const filteredTeam = team.filter((t) =>
    t.name.toLowerCase().includes(query) || t.role.toLowerCase().includes(query)
  );

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{query}"</h1>

      <div className="space-y-10">
        {/* Committees */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Committees</h2>
          {filteredCommittees.length > 0 ? (
            <ul className="space-y-2">
              {filteredCommittees.map((c, idx) => (
                <li key={idx} className="bg-gray-800 p-4 rounded">{c.name} - {c.description}</li>
              ))}
            </ul>
          ) : <p className="text-gray-400">No committees found</p>}
        </section>

        {/* Events */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Events</h2>
          {filteredEvents.length > 0 ? (
            <ul className="space-y-2">
              {filteredEvents.map((e, idx) => (
                <li key={idx} className="bg-gray-800 p-4 rounded">{e.title} - {e.description}</li>
              ))}
            </ul>
          ) : <p className="text-gray-400">No events found</p>}
        </section>

        {/* Team Members */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>
          {filteredTeam.length > 0 ? (
            <ul className="space-y-2">
              {filteredTeam.map((t, idx) => (
                <li key={idx} className="bg-gray-800 p-4 rounded">{t.name} - {t.role}</li>
              ))}
            </ul>
          ) : <p className="text-gray-400">No team members found</p>}
        </section>
      </div>
    </div>
  );
}
