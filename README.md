# TypeScript

### To convert ts file to js command is the 
- tsc -b
#### after that we need to  run the js file to get the result


## understanding the tsconfig.json file  
 - __target__ it define the _ECMAscript_ version for conversion form ts to js
 - to avoid conflict between the js and ts file we are place .ts in the src folder and put .js in the dist folder
 - __rootDir__  contain .ts file path
 - __outDir__ contain .js file
 - __noImplicitlyAny__
 - __removeComments__ it use to remove comment in .js


## INTERFACES
- assign type to the objecta like a user has some predefined properties.
- 

## IMPLEMENTATION INTERFACES
- using the interfaces as the classes
- it is like the same as java intefaces contain the layout or structure
- syntax

interfaces Person {
    // define the 
}

class Employee implements Person {
    //defne
}

## what are TYPES
- these are not use to implements the classes.
- able to some other things
-- union of types let you want a use have id string or number
-- intersection of two types
- syntax
type use = {
    //define what ever ypu wnt
}

## ARRAYS in the typescript
use number[]

## ENUMS in ts
- used define set of named constants

- syntax
enum Name {
    //define the contants 
}

## Generics
- it is similar like c++ template 
- when you want a funtion which return any type variable
- Generics help us create components that work with any data type .

## Importing and exporting modules
----------------for importing Modules-------------------
- one way const express = require("express")
- ts follow modern way es6 module system
- import express from "express"

--------------for exporting modules-----------------------
- export const a = 1;


## Pick 
- it help us to select the some value of the current inteface to new one 
```ts
//syntax
type newVariable = Pick<type/interface name, 'par1' | 'par2'>;

```

## Partial
- when you want convert each eleemnt of the inteface/type to optional use partial 
```ts

//syntax
type optional_name = partial<previous_type/interface>;

```

## ReadOnly 
- it help in making internal values of any object to constant
- one of the important usecase is when user api key (so can't change by developer)
```ts
type user {
    name: "lavkush";
}

user.name = "kushwaha"; // it let you change 


// but if you them constant 
type user {
    Readonly name: "Lavkush"
    -
    -
}

//or either 
const user: Readonly<User> = {

}

```

## Record and Map
- easier and simple way to assign the object type
```ts
// using the records

type object_name = Record<string, {par1: type, par2: type, ----}>;

```

```ts
//using map

const users = new Map();
map.set(whatever);
map.get(by id or name);

// another way 
type var_name = {
    par1: type;
    par2: type;
    -
    -
    -
};

const users = new Map<string,var_name>(); specific example
```

## Exclude
- user to rempve specific type from a type
```ts
//syntax 
type excluded = Exclude<type_name,'for exclude'>;

```





