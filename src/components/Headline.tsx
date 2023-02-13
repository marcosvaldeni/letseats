import { HeadlineCard } from "./HeadlineCard";

export function Headilne() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-5">
      <HeadlineCard
        title="We Deliver Deserts Too" 
        subtitle="Tasty Treats" 
        img="Deserts"
      />
      <HeadlineCard 
        title="New Restaurants" 
        subtitle="Added Daily" 
        img="dsds"
      />
      <HeadlineCard 
        title="We Deliver Deserts Too" 
        subtitle="Tasty Treats" 
        img="Deserts"
      />
    </div>
  );
}