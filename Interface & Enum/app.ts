//Interface------------object ka structure or shape btana

interface student {
    name: string,
    course: string,
    rollno: number,
    timings: string[]
}

type merged = student

const demo: merged = {

    name: "Umme Kashaf",
    rollno: 342596,
   course: "Web development",
   timings: ["11:00am-1:00pm"],

};


//Enum------mentioned fixed values-discussed & define

enum Color {Red, Green, Blue};
 var c: Color =Color.Green;   
//  answer:1 because red=0, green=1, blue=2 