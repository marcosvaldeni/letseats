import { Food } from "../../components/FoodMenu";
import { Headilne } from "../../components/Headline";
import { Hero } from "../../components/Hero";

export function Home() {
  return (
    <>
      <Hero />
      <Headilne />
      <Food />
    </>
  );
}