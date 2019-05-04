import { ID } from '@datorama/akita';

export interface UpdatePersonRequestDto {
    id: ID;
    firstName: string;
    lastName: string;
}
