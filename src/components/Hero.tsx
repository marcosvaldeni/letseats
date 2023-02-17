export function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">

        <div className="absolute h-full w-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">O <span className="text-orange-500">Melhor</span></h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-500">Churrasco </span> da Região</h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/983373/pexels-photo-983373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Picture of burger" />
      </div>
    </div>
  );
}
