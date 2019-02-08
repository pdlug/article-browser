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
    this.state = { values: [], searchTerm: "" };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    const { values, searchTerm } = this.state;
    const { submitUserInput } = this.props;
    this.setState({
      values: [],
      searchTerm: ""
    });
    submitUserInput(values, searchTerm);
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    const { values, searchTerm } = this.state;
    const choices = values
      ? JournalChoiceContainer(values)
      : null;

    return (
      <div className="flex bg-grey justify-center">
        <div className="container flex w-full">
          <div className="w-2/5 px-5">
            <label>
              <h4 className="uppercase py-5">Choose Journals</h4>
              <select
                value={values}
                multiple
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
          </div>
          <div className="inline-block w-3/5">
            <label>
              <h4 className="py-5 uppercase">Search Term</h4>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="search-terms"
                type="text"
                onChange={this.handleInputChange}
                value={searchTerm}
              />
              <div>
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                >
                  Search
                </button>
              </div>
            </label>
          </div>

        </div>
      </div>
    );
  }
}

export default UserInput;
