export interface FixtureResponseDto {
    id: string;
    home: string;
    away: string;
    tied: boolean;
    setsToWin: number;
    maxSetsToPlay: number;
    sets: SetResponseDto[];
}

export interface SetResponseDto {
    result: SetResultResponseDto;
}

export enum SetResultResponseDto {
    None = 0,
    Home = 1,
    Tied = 2,
    Away = 3
}
