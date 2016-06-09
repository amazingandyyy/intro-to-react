var Counter = React.createClass({
    getInitialState: function() {
        return {count: 0}
    },

    render: function() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button className="btn btn-default" onClick={() => this.setState({count: this.state.count + 1})}>+</button>
                <button className="btn btn-default" onClick={() => this.setState({count: this.state.count - 1})}>-</button>
            </div>
        )
    }
})

var Root = React.createClass({
    getInitialState: function() {
        return {one: 0}
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

    render: function() {
        var greeting = 'hello';
        return (
            <div>
                <h3>{greeting}</h3>
                <h1>Counter: {this.state.one}</h1>
                <button id="one" className="btn btn-default" onClick={this.addCount.bind(this, 'one')}>+</button>
                <button id="one" className="btn btn-default" onClick={this.minusCount.bind(this, 'one')}>-</button>
                <hr/>
                <Counter/>
            </div>
        )
    }
})

ReactDOM.render(
    <Root/>, document.getElementById('root'))
