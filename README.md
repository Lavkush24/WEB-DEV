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

# ARRAYS in the typescript
use number[]
