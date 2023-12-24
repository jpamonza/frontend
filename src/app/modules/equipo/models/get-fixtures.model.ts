export interface GetFixturesResponse {
  get: string;
  parameters: Parameters;
  errors: FixtureError;
  results: number;
  paging: Paging;
  response: GameResult[];
}

export interface FixtureError {
  time: Date;
  bug: string;
  report: string;
}

export interface Parameters {
  team: string;
  last: string;
}

export interface Paging {
  current: number;
  total: number;
}

export interface GameResult {
  fixture: Fixture;
  league: League;
  teams: Match<Team>;
  goals: Match<number>;
  score: Score;
}

export interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: Date;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: number;
  second: number;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number;
}

export interface Venue {
  id: number;
  name: string;
  city: string;
}

export interface Match<T> {
  home: T;
  away: T;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
  round: string;
}

export interface Score {
  halftime: Match<number | null>;
  fulltime: Match<number | null>;
  extratime: Match<number | null>;
  penalty: Match<number | null>;
}
