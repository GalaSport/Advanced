(function (){
    String.prototype.ensureStart = function(str){
        if(this.startsWith(str)){
            return this.toString();   
        }else{
           return str + this;   
        }
    }
    String.prototype.ensureEnd =  function(str){
        return this.endsWith(str) ? this.toString() : this + str
    }
    String.prototype.isEmpty = function(){
        return this.length == 0 ? true : false
    }
    String.prototype.truncate = function(n){
        if(n < 4){
            return ".".repeat(n);
        }
        if(this.length <= n){
            return this.toString();
        }
        if(this.includes(" ")){
            let words = this.split(" ");
            let res = [];
            for(let word of words){
                if(res.join(" ").length + word.length + 3 <= n){
                    res.push(word)
                }else{
                    break;
                }
            }
            return res.join(" ") + "...";
        }
        return this.slice(0, n - 3) + "...";
    }
    String.format = function(str, ...params){
        for(let i = 0; i < params.length; i++){
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }
})()

let myString = "Gala"
console.log(myString.ensureEnd("a"))
console.log("--------------");
myString = "Gal";
console.log(myString.ensureEnd("a"));
myString = "";
console.log(myString.isEmpty());
myString = "R";
console.log(myString.isEmpty());
myString = "st";
console.log(myString.truncate(3));



