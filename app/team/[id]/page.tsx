import team from "@/lib/team.json";



export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = team.find((m) => m.id === params.id);

  if (!member) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-400">
        ❌ Member not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100 p-6">
      <div className="bg-gray-900 shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <div className="flex flex-col items-center text-center">
          <img
            src={`/images/team/${member.image}`}
            alt={member.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md mb-4"
          />
          <h1 className="text-3xl font-bold">{member.name}</h1>
          <p className="text-blue-400 font-medium">
            {member.committee} {member.position && `• ${member.position}`}
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">{member.bio}</p>
        </div>

        {/* Details */}
        <div className="mt-6 border-t border-gray-700 pt-4">
          <h2 className="font-semibold text-lg mb-2 text-white">Details</h2>
          <ul className="space-y-1 text-gray-300">
            <li>📌 Committee: {member.committee}</li>
            <li>🎖 Position: {member.position}</li>
            <li>🎂 Date of Birth: {member.dob}</li>
            <li>📧 Email: {member.email}</li>
            {member.phone && <li>📱 Phone: {member.phone}</li>}
          </ul>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              className="text-blue-500 hover:text-blue-400 font-medium"
            >
              LinkedIn
            </a>
          )}
          {member.social.instagram && (
            <a
              href={member.social.instagram}
              target="_blank"
              className="text-pink-500 hover:text-pink-400 font-medium"
            >
              Instagram
            </a>
          )}
          {member.social.facebook && (
            <a
              href={member.social.facebook}
              target="_blank"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Facebook
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
