

type events = "scroll" | "click" | "mousemove";
type eventsExclude = Exclude<events, 'click'>;

const handleEvent = (event: eventsExclude) => {
    console.log(`event happen ${event}`);
};

// handleEvent(click); //this give error becaue it excluded






// //the first way to give type to objects (slightly complicated way)
// type user = {
//     id: string;
//     name: string;
// };

// type users = {
//     [key: string]: user;
// };

// const users: users = {
//     "ras@sd": {
//         id: "ras@sd",
//         name: "lavkush",
//     },
//     "dfk@s": {
//         id: "dfk@s",
//         name: "Krish"
//     }
// }

// // another one way 
// type usersAge = {
//     [key: string]: number;
// };

// const users2: usersAge = {
//     "ras@sd": 45,
//     "dfk@s": 67
// }


// /**  ----------------by using the records  and map----------------  */


// //usecase of record  (clearner syntax)
// type users2 = Record<string,{age: number, name: string}>;

// const userRecord: users2 = {
//     "ras@sd": {
//         age: 23,
//         name: "lavkush",
//     },
//     "dfk@s": {
//         age: 20,
//         name: "Krish"
//     }
// }


// //key value pair using map  ( this is the js concept not specif9ic to ts)

// // const profile = new Map();

// /** during the defination of the map you can add type for the id and objects */
// // like this
// type prof = {
//     name: string;
//     email: string;
// };
// const profile = new Map<string,prof>();

// profile.set("dklfj",{name: "lav", email: "random@gmail.com"});
// profile.set("dkljfk",{ name: "kush", email: "kush@gmail.com"});

// console.log(profile.get("dklfj"));










// interface profile {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// };

// //use of read only 
// const u: Readonly<profile> = {
//     id: 3,
//     name: "lav",
//     age: 45,
//     email: "lkdsfk",
//     password: 'ldsfkdkf',
// };

// // u.name = "any"; // this give error because it is define by read only

// //it let you select from the inteface or type  ()
// type updatedProb = Pick<profile, 'name' | 'age'>;


// // use of partial 
// type updateProbOprional = Partial<updatedProb>;


// function updateInfo(updatedProb: updatedProb) {

// }


// interface profile {
//     name: string;
//     age: number;
// };

// function sumage(user1:profile,user2:profile) {
//     console.log(user1.age + user2.age);
// }

// let p1 = {
//     name: "lavkush",
//     age: 45
// }
// sumage(p1,p1);
