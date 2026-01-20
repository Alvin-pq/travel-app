export interface ItineraryItem {
    id: string;
    day: number;
    time: string;
    title: string;
    location: string;
    type: 'food' | 'spot';
    cost: string;
}
