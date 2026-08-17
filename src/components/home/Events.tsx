import { CHURCH_EVENTS } from "../../data/events";

function Events() {
  return (
    <section className="py-10">
      <div className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800">

        <table className="w-full">

          <thead className="bg-blue-900 text-white">

            <tr>
              <th className="px-6 py-4 text-center">Date</th>
              <th className="px-6 py-4 text-center">Event</th>
            </tr>

          </thead>

          <tbody>

            {CHURCH_EVENTS.map((item, index) => (

              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
              >

                <td className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-gray-100">
                  {item.date}
                </td>

                <td className="px-6 py-4 text-center text-gray-800 dark:text-gray-300">
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
