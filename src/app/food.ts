interface FoodItem {
    id: number;
    name: string;
    calories: number;
    weight: number;
}
export class FoodItemCal implements FoodItem {
    id: number;
    name: string;
    calories: number;
    weight: number;

    constructor($id: number, $name: string, $calories: number, $weight: number) {
        this.id = $id;
        this.name = $name;
        this.calories = $calories;
        this.weight = $weight;
    }
}
