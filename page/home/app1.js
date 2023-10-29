class MainScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>Want to focus?</h1>
        <button onClick={this.handleStartNow}>Start Now</button>
        <button onClick={this.handleSchedule}>Schedule</button>
      </div>
    );
  }

  handleStartNow = () => {
    this.props.navigation.navigate("SetDuration");
  };

  handleSchedule = () => {
    this.props.navigation.navigate("SetTime");
  };
}
class SetDurationScreen extends React.Component {
  state = {
    duration: 0,
  };

  handleChange = (event) => {
    this.setState({ duration: parseInt(event.target.value) });
  };

  handleSubmit = () => {
    this.props.navigation.navigate("CaffeineSelection", {
      duration: this.state.duration,
    });
  };

  render() {
    return (
      <div>
        <h1>Set Duration</h1>
        <input type="number" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Confirm</button>
      </div>
    );
  }
}
class SetTimeScreen extends React.Component {
  state = {
    time: "",
  };

  handleChange = (event) => {
    this.setState({ time: event.target.value });
  };

  handleSubmit = () => {
    this.props.navigation.navigate("CaffeineSelection", {
      time: this.state.time,
    });
  };

  render() {
    return (
      <div>
        <h1>Set Time</h1>
        <input type="time" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Confirm</button>
      </div>
    );
  }
}
class CaffeineSelectionScreen extends React.Component {
  state = {
    selection: "",
  };

  handleChange = (event) => {
    this.setState({ selection: event.target.value });
  };

  handleSubmit = () => {
    const { duration, time } = this.props.route.params;
    const path =
      this.state.selection === "beverage"
        ? "BeverageSelection"
        : "FoodSelection";
    this.props.navigation.navigate(path, { duration, time });
  };

  render() {
    return (
      <div>
        <h1>Choose your intake</h1>
        <select onChange={this.handleChange}>
          <option value="">Select...</option>
          <option value="beverage">Beverage</option>
          <option value="food">Food</option>
        </select>
        <button onClick={this.handleSubmit}>Confirm</button>
      </div>
    );
  }
}
class BeverageSelectionScreen extends React.Component {
  state = {
    selectedBeverage: "",
  };

  handleChange = (event) => {
    this.setState({ selectedBeverage: event.target.value });
  };

  handleSubmit = () => {
    const { duration, time } = this.props.route.params;
    this.props.navigation.navigate("FinalScreen", {
      duration,
      time,
      selectedBeverage: this.state.selectedBeverage,
    });
  };

  render() {
    return (
      <div>
        <h1>Select a beverage</h1>
        <select onChange={this.handleChange}>
          {caffeinated_beverages.map((beverage) => (
            <option key={beverage.id} value={beverage.id}>
              {beverage.name}
            </option>
          ))}
        </select>
        <button onClick={this.handleSubmit}>Confirm</button>
      </div>
    );
  }
}
class FoodSelectionScreen extends React.Component {
  state = {
    selectedFood: "",
  };

  handleChange = (event) => {
    this.setState({ selectedFood: event.target.value });
  };

  handleSubmit = () => {
    const { duration, time } = this.props.route.params;
    this.props.navigation.navigate("FinalScreen", {
      duration,
      time,
      selectedFood: this.state.selectedFood,
    });
  };

  render() {
    return (
      <div>
        <h1>Select a food</h1>
        <select onChange={this.handleChange}>
          {caffeinated_foods.map((food) => (
            <option key={food.id} value={food.id}>
              {food.name}
            </option>
          ))}
        </select>
        <button onClick={this.handleSubmit}>Confirm</button>
      </div>
    );
  }
}
class FinalScreen extends React.Component {
  render() {
    const { duration, time, selectedBeverage, selectedFood } =
      this.props.route.params;

    return (
      <div>
        <h1>Confirmation</h1>
        <p>
          Duration: {duration} minutes, Scheduled Time: {time}
        </p>
        <p>Selected: {selectedBeverage || selectedFood}</p>
        <button onClick={this.handleSubmit}>Start</button>
      </div>
    );
  }
}
