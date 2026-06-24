// Inbäddad Google Calendar-bokning (appointment schedule).
// Ersätter kontaktformuläret med en tidsbokning direkt på sidan.

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1F6r-ShXdzkP6qjUXHlVWioe9Jpf3zMYcYbCbkDPIuauz3ptq2eU9L7WO2ANGMTFhXLk5IOtDs?gv=true";

export default function BookingEmbed({ locale = "sv" }: { locale?: "sv" | "en" }) {
  const title = locale === "en" ? "Book a meeting with Successifier" : "Boka möte med Successifier";
  const fallback = locale === "en" ? "Open the booking in a new tab" : "Öppna bokningen i en ny flik";

  return (
    <div>
      <div className="overflow-hidden rounded-[6px]" style={{ border: "1px solid var(--hairline)", background: "#ffffff" }}>
        <iframe
          src={BOOKING_URL}
          title={title}
          loading="lazy"
          className="block h-[820px] w-full sm:h-[720px]"
          style={{ border: 0, colorScheme: "light" }}
        />
      </div>
      <p className="mt-3 text-[13px]" style={{ color: "var(--faint-2)" }}>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
          style={{ color: "var(--faint)", borderBottom: "1px solid var(--hairline)" }}
        >
          {fallback} ↗
        </a>
      </p>
    </div>
  );
}
