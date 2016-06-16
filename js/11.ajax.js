var Suggest = React.createClass({
    getInitialState:function(){
        return {
            content:[]
        }
    },
    handleChange:function(){
        var keyword = this.refs.keyword.value;
        $.ajax({
            url:'http://www.baidu.com/su',
            type:'get',
            jsonp:'cb',//指定回调函数参数名
            dataType:'jsonp',//指定返回值的数据类型
            data:{wd:keyword},
            processData:true,//是否把data转变成查询字符串放在url的后面
            //context:this,//指定success回调函数中的this 指针
            success:function(result){
                var data = result.s;
                var newData = data.map((item,index)=>{
                    return <li key={index}>{item}</li>
                });
                this.setState({
                    content:newData
                });
            }.bind(this)
        })
    },
    render:function(){
        return (
            <div>
                <input type="text" ref="keyword" onChange={this.handleChange}/>
                <br/>
                <ul>
                    {this.state.content}
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<Suggest></Suggest>,document.querySelector('#app'));