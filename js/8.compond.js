var Panel = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <PanelHead></PanelHead>
                <PanelBody></PanelBody>
            </div>
        )
    }
});

var PanelHead = React.createClass({
    render: function () {
        return (
            <div className="panel-heading">Panel heading without title</div>
        )
    }
});

var PanelBody = React.createClass({
    render: function () {
        return (
            <div className="panel-body">
                Panel content
            </div>
        )
    }
});

ReactDOM.render(
    <Panel/>,
    document.querySelector('#app')
);
