const NumberDisplay = ({ currentTime, functionName }) => <div>{currentTime[functionName]()}</div>;


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
    this.updateTime = this.updateTime.bind(this);
    this.style = {
      display: flex,
      flexDirection: row,
    };
  }
  updateTime() {
  	this.setState({ currentTime: new Date() });
  }
  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  render() {
    return (<div style={this.style}>
      <NumberDisplay currentTime={this.state.currentTime} functionName={'getHours'} />:
      <NumberDisplay currentTime={this.state.currentTime} functionName={'getMinutes'} />
    </div>);
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('container'),
);
