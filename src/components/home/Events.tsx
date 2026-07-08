function Events() {
  const events = [
    { date: "01 Jan 2026", event: "New Year Service" },
    { date: "26 Jan 2026", event: "Special Prayer Meeting" },
    { date: "01 Apr 2026", event: "Fasting Prayers" },
    { date: "02 Apr 2026", event: "Fasting Prayers" },
    { date: "03 Apr 2026", event: "Good Friday Service" },
    { date: "04 Apr 2026", event: "Fasting Service" },
    { date: "05 Apr 2026", event: "Easter Service" },
    {
      date: "18 Apr 2026",
      event:
        "Celebration of our Founding Pastor – 3rd Death Anniversary",
    },
    { date: "24 May 2026", event: "Special Sunday Service" },
    { date: "13 Jun 2026", event: "One Day Bible Conference" },
  ];

  return (
    <section className="py-10">
      <div className="overflow-hidden rounded-xl shadow-lg bg-white">

        <table className="w-full">

          <thead className="bg-blue-900 text-white">

            <tr>
              <th className="px-6 py-4 text-center">Date</th>
              <th className="px-6 py-4 text-center">Event</th>
            </tr>

          </thead>

          <tbody>

            {events.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-blue-50 transition"
              >

                <td className="px-6 py-4 text-center font-semibold">
                  {item.date}
                </td>

                <td className="px-6 py-4 text-center">
                  {item.event}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </section>
  );
}

export default Events;