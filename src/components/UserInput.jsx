import React, { Component } from "react";

const JournalChoice = (val) => {
  return (
    <span
    key={`journal-${val}`}
    className="px-2"
  >{`Journal ${val}`}</span>
  )
}

const JournalChoiceContainer = (choices) => {
  return choices.map(JournalChoice)
}

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectChange(event) {
    const value = event.target.value;
    if (this.state.values.indexOf(value) >= 0) return;
    let values =
      this.state.values.length === 0
        ? [event.target.value]
        : [...this.state.values, event.target.value];

    this.setState({
      values
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { values } = this.state;
    const { submitUserInput } = this.props;
    this.setState({
      values: []
    });
    submitUserInput(values);
  }

  render() {
    const { values } = this.state;
    const choices = values 
      ? JournalChoiceContainer(values)
      : null

    return (
      <div className="flex bg-grey justify-center">
        <div className="container flex w-full">
          <div className="w-2/5 px-5">
            <label>
              <h4 className="uppercase py-5">Choose Journals</h4>
              <select
                value={this.state.values}
                multiple={true}
                size={4}
                className="bg-grey-lighter border border-grey-lighter text-grey-darker my-3 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                onChange={this.handleSelectChange}
              >
                <option value="A">Journal A</option>
                <option value="B">Journal B</option>
                <option value="C">Journal C</option>
                <option value="D">Journal D</option>
              </select>
            </label>
            <div className="py-4 uppercase bold">{choices}</div>
            <div>
                <button
                  onClick={this.handleSubmit}
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                >
                  Search
                </button>
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default UserInput;
