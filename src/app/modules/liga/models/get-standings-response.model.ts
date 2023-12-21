export interface GetStandingsResponse {
  get: string;
  parameters: Parameters;
  errors: StandingError;
  results: number;
  paging: Paging;
  response: Response[];
}

export interface StandingError {
  time: string;
  bug: string;
  report: string;
}

export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  league: string;
  season: string;
}

export interface Response {
  league: League;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Array<Standing[]>;
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: Statistics;
  home: Statistics;
  away: Statistics;
  update: Date;
}

export interface Statistics {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals {
  for: number;
  against: number;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
