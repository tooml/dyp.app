import { FixtureResponseDto } from './FixtureResponseDto';

export interface RoundResponseDto {
    name: string;
    matches: FixtureResponseDto[];
}

