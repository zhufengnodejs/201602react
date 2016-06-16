var Person = React.createClass({
    getDefaultProps:function(){
        return {name:'无名氏'}
    },
    //获取初始的状态
    getInitialState:function(){
        //返回一个状态对象
        return {happy:true}
    },
    //当按钮被点击的时候会改变状态
    handleClick:function(){
        //当状态发生改变的时候会重新渲染页面
        //这是一个异步的操作，不能操作之后马上获取最新的值
        this.setState({
            happy:!this.state.happy
        },function(){
            console.log(this.state.happy);
        });

    },
    render:function(){
        //取出状态对象
        var heart = this.state.happy?'开心':'伤心难过郁闷好失落';
        return (
            <div>
                <h1>{this.props.name} {heart}</h1>
                <button onClick={this.handleClick}>变心</button>
            </div>

        )
    }
});

ReactDOM.render(<Person name="诺登"></Person>,
    document.querySelector('#app')
);

/**
 *  react  单向数据流 一个组件的属性一般是由父组件来决定的
 *
 **/