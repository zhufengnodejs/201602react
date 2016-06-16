var FormInput = React.createClass({
    getInitialState:function(){
      return {hint:'请输入',val:''}
    },
    handleClick:function(event){
        //获取事件源的input的值
        var val = event.target.value;
        //设置状态
        this.setState({
            val:val
        });
    },
    render:function(){
        return (
            <div>
                {this.state.hint}:<input value={this.state.val} onChange={this.handleClick}/>
                <p>{this.state.val}</p>
            </div>
        )
    }
});

ReactDOM.render(<FormInput></FormInput>,document.getElementById('app'));