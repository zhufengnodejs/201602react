
var Person = React.createClass({
    //指定使用此组件的时候所要传入的属性名和属性的类型
    propTypes:{
      name:React.PropTypes.string.isRequired,
      gender:React.PropTypes.number.isRequired
    },
   //获取默认属性对象
   getDefaultProps:function(){
     return {
         name:'无名氏'
     }
   },
    //渲染的方法
   render:function(){
       return (
           <h1>{this.props.name} {this.props.gender}</h1>
       )
   }
});
var props = {
    name:'zfpx',
    gender:'男'
}
ReactDOM.render(
    <Person {...props} ></Person>,
    document.querySelector('#app')
);