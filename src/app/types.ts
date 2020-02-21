export type Date = { year: number; month: number; day: number };

export type Mood =
  | 'grumpy'
  | 'sad'
  | 'happy'
  | 'depressed'
  | 'average'
  | 'annoyed'
  | 'anxious'
  | 'energetic'
  | 'sick';

export interface Day {
  date: Date;
  dayState: Mood | undefined;
}

export type CalendarOptions = {
  display: string;
  year: number;
  month: number;
};

// Input handler

export type handleSelectMonthNav = (year: number, month: number) => void;
