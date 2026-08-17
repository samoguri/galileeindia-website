const NEWS_MESSAGE =
  "Whole night Fasting Prayer on 11th Sept 2026, 7:30 PM-12:00AM";

function BreakingNews() {
  return (
    <div className="w-full bg-blue-900 text-white flex items-stretch overflow-hidden">
      <div className="flex items-center gap-2 bg-[#FFD54F] text-blue-900 font-bold px-5 py-2 whitespace-nowrap shrink-0 z-10">
        Upcoming Events
      </div>

      <div className="border-l-2 border-dashed border-[#FFD54F]/60 shrink-0" />

      <div className="relative flex-1 overflow-hidden py-2 pl-6">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {[0, 1].map((index) => (
            <span key={index} className="px-2">
              {NEWS_MESSAGE}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BreakingNews;
