import React, { Component } from 'react';
import PropTypes from 'prop-types';

const JournalChoice = val => (
  <span
    key={`journal-${val}`}
    className="px-2"
  >
    {`Journal ${val}`}
  </span>
);

const JournalChoiceContainer = choices => choices.map(JournalChoice);

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      values: [],
      searchTerm: '',
      activeChoices: {
        a: false,
        b: false,
        c: false,
        d: false
      }, 
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSelectChange(event) {
    console.log(event)
    const { values } = this.state;
    const value = event.target.value;
    let newValues;
    let valIndex = values.indexOf(value)
    if (valIndex >= 0) {
      values.splice(valIndex, 1)
      console.log(values)
      console.log(this.state.values)
    } else {
      newValues = values.length === 0
      ? [event.target.value]
      : [...values, event.target.value];
    }


    this.setState({
      values: newValues,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { activeChoices, searchTerm } = this.state;
    const { submitUserInput } = this.props;
    this.setState({
      values: [],
      searchTerm: '',
    });
    submitUserInput(activeChoices, searchTerm);
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleButtonClick(event) {
    const id = event.target.id;
    const target = event.target;
    
    // [TODO:]  This must be refactored:
    //    1) Change activeChoices keys to all uppercase
    //    2) Change Jounral buttons keys from button-{journal.id} to journal.id ->  button-A to A
    //    3) Remove toUppercase call from utils.buildUrl()

    switch (id) {
      case "button-A":
        console.log(this.state.activeChoices.a)
        if (this.state.activeChoices.a) {
          target.classList.remove('bg-red')
          target.classList.add('bg-blue')
          let activeChoices = {...this.state.activeChoices}
          activeChoices.a = false
          this.setState(state => {
            return {
              ...state,
              activeChoices: {...this.state.activeChoices, a: false}
            }
          })
        } else {
          target.classList.remove('bg-blue')
          target.classList.add('bg-red')
          this.setState(state => {
            return {
              ...state,
              activeChoices: {...this.state.activeChoices, a: true}
            }
          })
        }
        break
      case "button-B":
        if (this.state.activeChoices.b) {
          target.classList.remove('bg-red')
          target.classList.add('bg-blue')
          this.setState(state => {
            return {
              ...state,
              activeChoices: {...this.state.activeChoices, b: false}
            }
          })
        } else {
          target.classList.remove('bg-blue')
          target.classList.add('bg-red')
          this.setState(state => {
            return {
              ...state,
              activeChoices: {...this.state.activeChoices, b: true}
            }
          })
        }
        break
      case "button-C":
        if (this.state.activeChoices.c) {
          target.classList.remove('bg-red')
          target.classList.add('bg-blue')
          this.setState(state => {
            return {
              ...state,
              activeChoices: {...this.state.activeChoices, c: false}
            }
          })
        } else {
          target.classList.remove('bg-blue')
          target.classList.add('bg-red')
          this.setState(state => {
            return {
              ...state,
              activeChoices: {...this.state.activeChoices, c: true}
            }
          })
        }
        break
      case "button-D":
        if (this.state.activeChoices.d) {
          target.classList.remove('bg-red')
          target.classList.add('bg-blue')
          this.setState(state => {
            return {
              ...state,
              activeChoices: {...this.state.activeChoices, d: false}
            }
          })
        } else {
          target.classList.remove('bg-blue')
          target.classList.add('bg-red')
          this.setState(state => {
            return {
              ...state,
              activeChoices: {...this.state.activeChoices, d: true}
            }
          })
        }
        break
    }
  }

  render() {
    const { values, searchTerm } = this.state;
    const choices = values
      ? JournalChoiceContainer(values)
      : null;

    return (
      <div className="flex bg-grey justify-center">
        <div className="container flex w-full">
          <div className="w-3/5 px-5">

            <label>
              <h4 className="uppercase py-5">Choose Journals</h4>
              <button
                  id="button-A"
                  type="submit"
                  onClick={this.handleButtonClick}
                  className="mx-2 bg-blue hover:bg-red active:bg-red text-white font-bold py-2 px-4 rounded"
                >
                  Journal A
                </button>
                <button
                  id="button-B"
                  type="submit"
                  onClick={this.handleButtonClick}
                  className="mx-2 bg-blue hover:bg-blue-dark active:bg-red text-white font-bold py-2 px-4 rounded"
                >
                  Journal B
                </button>
                <button
                  id="button-C"
                  type="submit"
                  onClick={this.handleButtonClick}
                  className="mx-2 bg-blue hover:bg-blue-dark active:bg-red text-white font-bold py-2 px-4 rounded"
                >
                  Journal C
                </button>
                <button
                  id="button-D"
                  type="submit"
                  onClick={this.handleButtonClick}
                  className="mx-2 bg-blue hover:bg-blue-dark active:bg-red text-white font-bold py-2 px-4 rounded"
                >
                  Journal D
                </button>
              {/* <select
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
              </select> */}
            </label>
            <div className="py-4 uppercase bold">{choices}</div>
          </div>
          <div className="inline-block w-2/5">
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

UserInput.propTypes = {
  submitUserInput: PropTypes.func.isRequired,
};

export default UserInput;
