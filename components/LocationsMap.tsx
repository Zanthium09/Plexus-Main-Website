"use client";

export const locations = [
  {
    id: "dombivli",
    name: "Dombivli HQ",
    tag: "Global Operations Center",
    address:
      "RL-113 Lata Kunj, Milap Nagar, MIDC, Dombivli East - 421203, Maharashtra",
    phone: "+91 7045405405",
    email: "sales@plexussol.net",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60282.25551714916!2d73.0314847486328!3d19.210877599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7957e2dd266a1%3A0xe015f7db8fbcb2ee!2sDeepak%20Satish%20Patwatkar!5e0!3m2!1sen!2sin!4v1781783147543!5m2!1sen!2sin",
    color: "bg-red-600",
  },
  {
    id: "andheri",
    name: "Andheri Branch",
    tag: "Tech & Media Hub",
    address:
      "A-102, New India Heights, Opp. Police Lane, Opp. Andheri Railway Station, Andheri (East), Mumbai - 400069, Maharashtra",
    phone: "022-25109063",
    email: "sales@plexussol.net",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7719911295912!2d72.8500085!3d19.1176561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f891522005%3A0x5535a58878a0fe97!2sNew%20India%20Heights!5e0!3m2!1sen!2sin!4v1781783192579!5m2!1sen!2sin",
    color: "bg-zinc-400",
  },
];

export default function LocationsMap({ active }: { active: string }) {
  const current = locations.find((l) => l.id === active) ?? locations[0];

  return (
    <div className="relative w-full h-full">
      <iframe
        key={current.id}
        src={current.embedSrc}
        width="100%"
        height="100%"
        style={{ border: 0, position: "absolute", inset: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={current.name}
      />

      <div className="absolute top-4 right-4 bg-white px-4 py-3 rounded shadow-md border border-outline-variant hidden md:block z-10">
        <div className="flex flex-col gap-2">
          {locations.map((loc) => (
            <div key={loc.id} className="flex items-center gap-2">
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  current.id === loc.id ? loc.color : "bg-zinc-300"
                }`}
              />
              <span className="text-xs font-semibold font-inter whitespace-nowrap">
                {loc.id === "dombivli" ? "HQ - Dombivli" : "Branch - Andheri"}
                {current.id === loc.id && " (Active)"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}