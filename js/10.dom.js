var Focus = React.createClass({
    handleClick:function(event){
        // this.refs是一个对象
        //key 就是ref指定的值如myname
        // value 是这个拥有此ref属性对应的DOM元素
        this.refs.myname.focus();
    },
    render:function(){
        return (
            <div>
                <input ref="myname" />
                <button onClick={this.handleClick}>得到焦点</button>
                </div>
        )
    }
});


ReactDOM.render(
    <Focus/>,
    document.querySelector('#app')
);