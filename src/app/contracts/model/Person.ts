import { v4 as uuid } from 'uuid';

export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    turnierParticipations: number;
    games: number;
    wins: number;
    looses: number;
}

export function createPerson(): Person {
    return {
      id: uuid(),
      firstName: '',
      lastName: '',
      turnierParticipations: 0,
      games: 0,
      wins: 0,
      looses: 0
    };
  }
