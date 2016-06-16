var Panel = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <PanelHead head={this.props.head+1} ></PanelHead>
                <PanelBody body={this.props.body+1}></PanelBody>
            </div>
        )
    }
});

var PanelHead = React.createClass({
    render: function () {
        return (
            <div className="panel-heading">{this.props.head}</div>
        )
    }
});

var PanelBody = React.createClass({
    render: function () {
        return (
            <div className="panel-body">
                {this.props.body}
            </div>
        )
    }
});

ReactDOM.render(
    <Panel head="标题" body="内容"/>,
    document.querySelector('#app')
);
