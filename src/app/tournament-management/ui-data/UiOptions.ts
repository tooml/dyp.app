export interface Option {
    id: number;
    label: string;
}

export class TableOptions {
    tables: Option[] = [
            { id: 1, label: '1 Tisch' },
            { id: 2, label: '2 Tische' },
            { id: 3, label: '3 Tische' },
            { id: 4, label: '4 Tische' }
    ];
}

export class SetOptions {
    sets: Option[] = [
            { id: 1, label: '1 Satz' },
            { id: 2, label: '2 Sätze' },
            { id: 3, label: '3 Sätze' },
            { id: 4, label: '4 Sätze' }
    ];
}

export class PointOptions {
    points: Option[] = [
            { id: 1, label: '1 Punkt' },
            { id: 2, label: '2 Punkte' },
            { id: 3, label: '3 Punkte' },
            { id: 4, label: '4 Punkte' }
    ];
}
