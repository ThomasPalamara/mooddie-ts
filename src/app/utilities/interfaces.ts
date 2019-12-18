export interface Date {
  day: number;
  month: number;
  year: number;
}

export interface Day extends Date {
  dayState?: string;
}
