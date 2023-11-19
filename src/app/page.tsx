"use client";
import CitySelector from "./dropdown";
import DateTimePicker from "./datetime_picker";
import Button from "./buton";
import FantasyButton from "./fantasy_button";

export default function Home() {
  return (
    <main className="bg-blue-500">
      <div className="h-screen">
        <div className="flex items-center justify-center min-h-[50%] bg-red-600 space-x-24">
          <CitySelector />
          <DateTimePicker />
        </div>
        <div className="flex items-center justify-center min-h-[50%] bg-red-600 space-x-24">
          <FantasyButton
            onClick={() => {
              alert("You clicked me!");
            }}>
            Click me!
          </FantasyButton>
          <Button />
        </div>
      </div>
    </main>
  );
}
