interface HeadlineCardProps {
  title: string;
  subtitle: string;
  img: string;
}

export function HeadlineCard({}:HeadlineCardProps ) {
  return (
    <div className="rounded-xl relative">

      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
        <p className="px-2">Through 8/26</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg" alt="Plat of sushi" />
    </div>
    );
}