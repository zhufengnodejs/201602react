var sum = function(){
    return Array.from(arguments).reduce((curr,next)=>curr+next,0);
}
console.log(sum(1,2,3));

var arr = [4,5,6];
console.log(sum.apply(null,arr));
console.log(sum(...arr));


var old = {hint:'请输入',val:''};
var newObj = {
    val:'新值'
};

Object.assign(old,newObj);
console.log(old);

