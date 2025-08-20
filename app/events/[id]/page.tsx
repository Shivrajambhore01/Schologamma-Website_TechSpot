import events from "@/lib/events.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, MapPin, Users } from "lucide-react";

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id.toString() === params.id);

  if (!event) return notFound();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Hero Banner */}
      <div className="relative w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={event.img}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Event Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl shadow-sm">
          <CalendarDays className="w-6 h-6 text-orange-600" />
          <p className="text-gray-700 font-medium">September 2025</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl shadow-sm">
          <MapPin className="w-6 h-6 text-orange-600" />
          <p className="text-gray-700 font-medium">JDCOEM Campus</p>
        </div>
        <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl shadow-sm">
          <Users className="w-6 h-6 text-orange-600" />
          <p className="text-gray-700 font-medium">Open for All</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10 flex-col flex items-center gap-3 p-4 bg-orange-50 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">About the Event</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          {event.description}
        </p>
      </div>

      {/* Activities Section */}
      <div className="mt-10 gap-3 p-4 bg-orange-50 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">Highlights</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {event.activities?.map((act, i) => (
            <li
              key={i}
              className="p-4 bg-white rounded-xl shadow hover:shadow-md border border-gray-100"
            >
              ✅ {act}
            </li>
          )) || (
            <p className="text-gray-500 mt-2">
              Activities will be announced soon.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
