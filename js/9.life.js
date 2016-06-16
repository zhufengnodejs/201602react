var Message = React.createClass({
    //1.获取默认属性
    getDefaultProps:function(){
        console.log('1. getDefaultProps  获取初始属性');
    },
    //2.获取初始状态
    getInitialState:function(){
        console.log('2. getInitialState 获取初始状态');
        return {count:0}
    },
    //3.将要被挂载
    componentWillMount:function(){
        console.log('3. componentWillMount 将要被加载');
    },
    kill:function(){
        ReactDOM.unmountComponentAtNode(document.querySelector('#app'));
    },
    componentWillUnmount:function(){
        console.log('8.componentWillUnmount');
    },
    //4.挂载 其实就是把组件插入DOM
    render:function(){
        console.log('4. render 渲染');
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>增加</button>
                <button onClick={this.kill}>移除组件</button>

                <SubMessage count={this.state.count}></SubMessage>
            </div>
        )
    },
    //当状态发生改变的时候，询问是否需要更新
    shouldComponentUpdate:function(){
        console.log('5. shouldComponentUpdate 询问是否需要更新');
        if(this.state.count >=10){
            return false;
        }
        return true;//返回true表示可以更新视图
    },
    //组件将要被更新
    componentWillUpdate:function(){
        console.log('6. componentWillUpdate 将要更新');
    },
    //组件被重新渲染后
    componentDidUpdate:function(){
        console.log('7. componentDidUpdate 更新完成');
    },
    handleClick:function(){
        this.setState({count:this.state.count + 1});
    }
});

var SubMessage = React.createClass({
    //子组件将要收到新的属性
    componentWillReceiveProps:function(){
        console.log('子组件','componentWillReceiveProps');
    },
    //是否应该更新组件
    shouldComponentUpdate:function(){
        console.log('5. shouldComponentUpdate 询问是否需要更新');
        if(this.props.count >=5){
            return false;
        }
        return true;//返回true表示可以更新视图
    },
    render:function(){
        return <div>子组件:{this.props.count}</div>
    }

});

ReactDOM.render(<Message></Message>,document.querySelector('#app'))