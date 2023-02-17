import { useState } from "react";
import { data, IFood } from "../service/data";
import { ByCategories } from "./ByCategories";
import { ByServing } from "./BySering";
import { FoodList } from "./FoodList";

export function Food() {
  const [foods, setFoods] = useState<IFood[]>(data);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-4xl text-center">Our Menu</h1>

      <div className="mt-10 flex flex-col lg:flex-row justify-between">
        <ByCategories />
        <ByServing />
      </div>

      <FoodList foods={foods} />
    </div>
  );
}