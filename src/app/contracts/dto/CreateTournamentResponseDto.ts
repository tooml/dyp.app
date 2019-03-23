import { RoundResponseDto } from './RoundResponseDto';

export interface CreateTournamentResponseDto {
    id: string;
    name: string;
    round: RoundResponseDto;
}
