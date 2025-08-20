import committees from "@/lib/committees.json";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function CommitteePage({ params }: { params: { id: string } }) {
  const committee = committees.find((c) => c.id === params.id);

  if (!committee) return notFound();

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto text-gray-200">
      {/* Header Section */}
      <div className="flex items-center gap-6 bg-gray-900 rounded-2xl p-6 shadow-lg">
        <Image
          src={committee.logo}
          alt={committee.name}
          width={100}
          height={100}
          className="rounded-xl border border-gray-700"
        />
        <div>
          <h1 className="text-4xl font-bold">{committee.name}</h1>
          <p className="text-gray-400 mt-2">{committee.description}</p>
        </div>
      </div>

      {/* Full Description */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
          About {committee.name}
        </h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          {committee.fullDescription}
        </p>
      </section>

      {/* Activities */}
      {committee.activities?.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
            Activities
          </h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3">
            {committee.activities.map((act, i) => (
              <li
                key={i}
                className="bg-gray-800/60 p-4 rounded-xl shadow hover:bg-gray-800 transition"
              >
                ✅ {act}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Leadership */}
      {committee.leadership && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
            Leadership
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {Object.entries(committee.leadership).map(([role, leader]: any) => (
              <div
                key={role}
                className="bg-gray-900 p-5 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <Image
                  src={`/${leader.image}`}
                  alt={leader.name}
                  width={200}
                  height={200}
                  className="rounded-xl w-full h-48 object-cover border border-gray-700"
                />
                <h3 className="mt-4 text-lg font-bold">{leader.name}</h3>
                <p className="text-sm text-gray-400 italic">{role}</p>
                <p className="mt-2 text-sm text-gray-300">{leader.bio}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
