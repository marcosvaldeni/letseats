interface FoodCardProps {
  category: string;
  image: string;
  name: string;
  price: number;
}

export function FoodCard({ category, image, name, price }: FoodCardProps) {
  const imgSrc = `/dishes/${image}.jpeg`;
  
  return (
    <div className="border rounded-lg shadow-lg hover:scale-105 duration-300">
      <img 
        src={imgSrc}
        alt="Bowl of Ramen" 
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{name}</p>
        <p className="leading-0">
          <span className="bg-orange-500 text-white px-2 py-1  rounded-lg">{price}</span>
        </p>
      </div>
    </div>
  );
}