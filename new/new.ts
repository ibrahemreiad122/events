class person {
  private name: string;
  private age: number;

  set Name(name: string) {
    this.name = name;
  }
  set Age(age: number) {
    this.age = age;
  }
  get Name() {
    return this.name;
  }
  get Age() {
    return this.age;
  }
}
let p = new person();
p.Name = "ali";
p.Age = 20;

interface master {
  area(): void;
  tring(): void;
  volume(): void;
}
class space implements master {
  hight: number;
  len: number;
  wit: number;
  constructor(hight: number, len: number, wit: number) {
    this.hight = hight;
    this.len = len;
    this.wit = wit;
  }
  area() {
    console.log(this.hight * this.wit);
  }
  tring() {}
  volume() {
    console.log(this.len * this.hight * this.wit);
  }
}
let sp = new space(2, 3, 3);
sp.hight = 10;
sp.wit = 20;
sp.len = 15;
sp.volume();
sp.area();
