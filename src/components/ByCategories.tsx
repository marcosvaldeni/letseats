export function ByCategories() {
  return (
    <div >
      <p className="w-full font-bold text-gray-700">Filter Type</p>
      <div className="my-3 flex justify-between flex-wrap gap-4">
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white">All</button>
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white">Burguers</button>
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white">Pizza</button>
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white">Salads</button>
        <button className="border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white">Chicken</button>
      </div>
    </div>
  );
}