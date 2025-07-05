
const SubscriptionCard = function({ data }) {
  console.log(data)
  return (
    <section className="bg-white rounded-lg">
      <div className="border rounded-lg p-4 text-sm space-y-3">
        <header className="text-gray-600 text-xs">
          Total candidates {data.length} | New candidates {data.new}
        </header>

        <div>
          <p className="font-medium">Tech Languages</p>
          <div className="grid grid-rows-2 gap-1 mt-1">
            <div className="flex flex-wrap gap-1 ">
              {data.techLanguages.map((lang, idx) => (
                <span key={idx} className="bg-gray-100 rounded-full px-2 py-1 text-xs">{lang}</span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium">Experience</p>
          <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{data.experience}</span>
        </div>

        <div>
          <p className="font-medium">Salary range</p>
          <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{data.salaryRange.min} - {data.salaryRange.max} AMD.</span>
        </div>

        <div>
          <p className="font-medium">Position</p>
          <span className="bg-gray-100 rounded-full px-2 py-1 text-xs">{data.position}</span>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionCard;
