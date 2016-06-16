var persons = ['刘德华','刘德华','张怡宁','福原爱'];
setTimeout(function(){
    persons.push('萍萍');
    render();
},3000)

function render(){
    var style = {
        color:'yellow',
        "backgroundColor":'green',
        "fontSize":20
    }
    ReactDOM.render(
        <div style={style}>
            {
                persons.map(function(item,index){
                    return <div className="red" key={index}>{index}:{item}</div>
                })
            }
        </div>
        ,
        document.querySelector('#app')
    );
}
render();