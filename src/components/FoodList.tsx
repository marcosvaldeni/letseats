import { IFood } from "../service/data";
import { FoodCard } from "./FoodCard";

interface FoodListProps {
 foods: IFood[];
}

export function FoodList({ foods }: FoodListProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {foods && foods.map(food => {
        return (
          <FoodCard key={food.id}
            image={food.image}
            category={food.category}
            name={food.name}
            price={food.price}
          />
        );
      })}

    </div>
  );
}