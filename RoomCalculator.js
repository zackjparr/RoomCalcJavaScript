function RoomCalculator(){
    let length = prompt("Please inputer a length");
    let width = prompt("Please input a width");
    let height = prompt("Please input a height");

    let area = length * width;
    let volume = length * width * height;
    let perimeter = 2 * length + 2 * height;

    let carpet = area / 5;
    let paintperimeter = perimeter / 5;
    let paintwalls = (area + 2 * length * height + 2 * width * height) / 5;

    console.log("The area is " + area);
    console.log("The volume is " + volume);
    console.log("The perimeter is " + perimeter);
    console.log("The carpeted area is " + carpet);
    console.log("The paint perimeter is " + paintperimeter);
    console.log("The painted wall coverage is " + paintwalls);
}