export class PickService {
    
    public pick(array: string[], count: number): string[] {
        return array.slice(0, count);
    }
}