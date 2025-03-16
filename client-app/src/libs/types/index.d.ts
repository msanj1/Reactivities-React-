type Activity = {
  id: string;
  title: string;
  date: Date;
  description: string;
  category: string;
  isCancelled: boolean;

  // location props
  city: string;
  venue: string;
  latitude: number;
  longitude: number;
};
