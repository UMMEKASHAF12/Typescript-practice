//Union----------->

let value: number | string | boolean = 45;
value = "kashaf";
value = true;
// value= ["apple"]----------array is not assignable in type

//intersection------------>

type student = {
    studentname: string;
    rollno: number;
    isPresent: boolean;
}

type teacher = {
    teachername: string;
    batchno: number;
    isPresent: boolean;
}

type merged = teacher & student

const demo: merged = {

    teachername: "Misstayyaba",
    studentname: "Umme Kashaf",
    rollno: 342596,
    batchno: 15,
    isPresent: true,

};


