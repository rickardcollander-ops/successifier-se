// Inbäddad Google Calendar-bokning (appointment schedule).
// Ersätter kontaktformuläret med en tidsbokning direkt på sidan.

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1F6r-ShXdzkP6qjUXHlVWioe9Jpf3zMYcYbCbkDPIuauz3ptq2eU9L7WO2ANGMTFhXLk5IOtDs?gv=true";

export default function BookingEmbed({
  locale = "sv",
  onAccent = false,
}: {
  locale?: "sv" | "en";
  onAccent?: boolean;
}) {
  const title = locale === "en" ? "Book a meeting with Successifier" : "Boka möte med Successifier";
  const fallback = locale === "en" ? "Open the booking in a new tab" : "Öppna bokningen i en ny flik";

  return (
    <div>
      <div
        className="overflow-hidden rounded-[6px]"
        style={{ border: `1px solid ${onAccent ? "rgba(242,238,230,.25)" : "var(--hairline)"}`, background: "#ffffff" }}
      >
        <iframe
          src={BOOKING_URL}
          title={title}
          loading="lazy"
          className="block h-[820px] w-full sm:h-[720px]"
          style={{ border: 0, colorScheme: "light" }}
        />
      </div>
      <p className="mt-3 text-left text-[13px]">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
          style={{
            color: onAccent ? "rgba(242,238,230,.75)" : "var(--faint)",
            borderBottom: `1px solid ${onAccent ? "rgba(242,238,230,.3)" : "var(--hairline)"}`,
          }}
        >
          {fallback} ↗
        </a>
      </p>
    </div>
  );
}
