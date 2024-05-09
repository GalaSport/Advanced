function solve(){
    return function(){
        return "Hello";
    }   
}
let newFunc = solve();

solve();
console.log(newFunc());