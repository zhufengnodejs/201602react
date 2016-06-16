
var Person = React.createClass({
   render:function(){
       console.log(this.props.children);
        return (
            <div>
                {this.props.name}
                <ol>
                    {
                      /*  React.Children.map(this.props.children,function(item){
                            return <li>{item}</li>
                        })*/
                        this.props.children.map(function (item,index) {
                            return <li key={index}>{item}</li>
                    })
                    }
                </ol>
            </div>

        )
   }
});
ReactDOM.render(
    <Person name="老毛">
        <span>大毛</span>
        <span>二毛</span>
        <span>三毛</span>
    </Person>,
    document.querySelector('#app')
);