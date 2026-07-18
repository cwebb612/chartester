

export type Photo = {
  id: number;
  imageUrl: string;
  date?: string;
  location?: string;
  description?: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    imageUrl: "https://storage.googleapis.com/chartester/photos/europe-1.jpg",
    date: "06-15-2024",
    location: "Tuscan Countryside",
    description: "Overlooking the town of Pienza on a moped ride"
  },
  {
    id: 2,
    imageUrl: "https://storage.googleapis.com/chartester/photos/RP-110.jpg",
    date: "06-15-2024",
    location: "Hawaii",
    description: "weeeee"
  }
]
