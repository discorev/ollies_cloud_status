/**
 * Created by Ollie on 10/05/2017.
 */

import { Record } from './record';

export class Graph {
    addr: string;
    name: string;
    'period-start': number;
    'period-end': number;
    record: Record[];
}
