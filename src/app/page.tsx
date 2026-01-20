import { TimelineView } from "@/components/TimelineView";
import { BottomNav } from "@/components/BottomNav";
import itineraryData from "@/data/itinerary.json";
import { ItineraryItem } from "@/types";

export default function Home() {
  // Cast data to ensure it matches interface
  const data: ItineraryItem[] = itineraryData as ItineraryItem[];

  return (
    <main className="min-h-screen bg-stone-50/90 pb-20 relative selection:bg-orange-200">
      <div className="bg-grain" />
      <TimelineView items={data} />
      <BottomNav />
    </main>
  );
}
