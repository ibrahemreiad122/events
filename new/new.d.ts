declare class person {
    private name;
    private age;
    set Name(name: string);
    set Age(age: number);
    get Name(): string;
    get Age(): number;
}
declare let p: person;
interface master {
    area(): void;
    tring(): void;
    volume(): void;
}
declare class space implements master {
    hight: number;
    len: number;
    wit: number;
    constructor(hight: number, len: number, wit: number);
    area(): void;
    tring(): void;
    volume(): void;
}
declare let sp: space;
