const SubscriptionForm = function() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Tech Languages</label>
        <select className="w-full border rounded px-3 py-2 text-sm">
          <option>Select</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Experience</label>
        <select className="w-full border rounded px-3 py-2 text-sm">
          <option>Select</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Salary range</label>
        <div className="flex gap-2">
          <input className="w-1/2 border rounded px-3 py-2 text-sm" placeholder="e.g. 50000" />
          <input className="w-1/2 border rounded px-3 py-2 text-sm" placeholder="e.g. 50000" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Position</label>
        <select className="w-full border rounded px-3 py-2 text-sm">
          <option>Select</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm font-medium mt-2"
      >
        Create subscription
      </button>
    </form>
  );
}

export default SubscriptionForm;
