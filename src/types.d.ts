declare namespace T {
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
}
