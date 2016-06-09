var Counter = React.createClass({
    counterAdd: function() {
        this.props.addFromChild()
    },
    render: function() {
        console.log('pops: ', this.props.count);

        return (
            <div>
                <h1>Count: {this.props.count}</h1>
                <button className="btn btn-default" onClick={this.counterAdd}>+</button>
            </div>
        )
    }
})

var Root = React.createClass({
    getInitialState: function() {
        return {one: 0, count: 0}
    },

    addCount: function(arg, e) {
        console.log('add: ', arg, e);
        // var id = e.target.id;
        var id = arg;
        // var newState = this.state;
        var newState = Object.assign({}, this.state); // better
        newState[id]++;
        this.setState(newState);
        console.log(newState);
    },
    minusCount: function(arg, e) {
        // console.log('e: ', e.target.two);
        // this.state.count += 1;
        var id = arg;

        var newState = Object.assign({}, this.state); // better
        newState[id]--;
        this.setState(newState);
        console.log(newState);
    },
    addFromChild: function() {
        console.log('add function');
    },
    render: function() {
        var greeting = 'hello';
        return (
            <div>
                <h3>{greeting}</h3>
                <h1>Counter: {this.state.one}</h1>
                <button id="one" className="btn btn-default" onClick={this.addCount.bind(this, 'one')}>+</button>
                <button id="one" className="btn btn-default" onClick={this.minusCount.bind(this, 'one')}>-</button>
                <hr/>
                <Counter addFromChild={this.addFromChild} count={this.state.count}/>
            </div>
        )
    }
})

ReactDOM.render(
    <Root/>, document.getElementById('root'))
