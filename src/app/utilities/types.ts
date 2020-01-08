export type Date = [number, number, number];

export type Mood =
  | 'grumpy'
  | 'sad'
  | 'happy'
  | 'depressed'
  | 'average'
  | 'annoyed'
  | 'anxious'
  | 'energetic'
  | 'sick'
  | undefined;
export interface Day {
  date: Date;
  dayState: Mood;
}

export type CalendarOptions = {
  display: string;
  year: number;
  month: number;
};

// Input handler

export type handleSelectMonthNav = (year: number, month: number) => void;
