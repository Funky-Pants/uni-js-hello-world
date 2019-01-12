// in brouser alert window
//alert("Hello world");
// In brouser console messige tool
console.log("Hello world from console");


//declarirane
var jsVariable      =    "test in JS";
var numberVar       = 10;
var floatVar        = 10.10;
var boolVar         = true;
var stringVar       = "Hello world";
var arrayVar        = [];
var objectArray     = {};
var dateVariable    = new Date();
var functionVariable = function() {};


console.log(jsVariable)
console.log(numberVar)
console.log(floatVar)
console.log(boolVar)
console.log(stringVar)
console.log(arrayVar)
console.log(objectArray)
console.log(dateVariable)
console.log(functionVariable)


//(expresion)
//[array]
//{object}
// Array example
var arrayCollection = [1,1,1,"Hello",[],{}];
console.log(arrayCollection)

var objectCollection = {
    "key" : "value",
    "number" : 10,
    "innerObject" : {},
    "innerArray" : [1,2,3,4],
    "functionPointer" : function() {

    },
    
  nameWhitNoParantasies : true  
};
console.log(objectCollection)

//functions

function functionName() {
    return "Hello world from function";

}

var  stringFunctionResult = functionName();
console.log("===========================")
console.log(stringFunctionResult)
//execute f directly
console.log(functionName());

//function with void
function voidFunction() {
    var a = 10 + 10;
    console.log("Call from inside voidFunction")
}
console.log(voidFunction());

var functionReference = voidFunction;
console.log(functionReference);
console.log(functionReference());

//variable declaration

var variableDeclaration;
console.log(variableDeclaration)

//var functionExpresion;
var functionExpresion = function(){
    return "%%%%%%%%%% Function Expresion result";
};
console.log(functionExpresion());

console.log(functionConstructor());
function functionConstructor() {
    return "==> Function Expresion result";
};