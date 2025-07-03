//Interface------------object ka structure or shape btana
var demo = {
    name: "Umme Kashaf",
    rollno: 342596,
    course: "Web development",
    timings: ["11:00am-1:00pm"],
};
//Enum------mentioned fixed values-discussed & define
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(demo);
console.log(Color);


