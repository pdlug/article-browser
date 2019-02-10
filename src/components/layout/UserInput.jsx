import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      searchTerm: '',
      activeChoices: {
        A: false,
        B: false,
        C: false,
        D: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.updateClickedButton = this.updateClickedButton.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { activeChoices, searchTerm } = this.state;
    const { submitUserInput } = this.props;
    submitUserInput(activeChoices, searchTerm);
  }

  handleInputChange(event) {
    const { target: { value } } = event;
    this.setState(state => ({
      ...state,
      searchTerm: value,
    }));
  }

  async updateClickedButton(target, id) {
    // const { id } = target;
    const { activeChoices } = this.state;
    const { submitUserInput } = this.props;
    if (activeChoices[id]) {
      target.classList.remove('bg-red');
      target.classList.add('bg-blue');
      this.setState({
        ...this.state,
        activeChoices: { ...activeChoices, [id]: false },
      }, () => {
        submitUserInput(this.state.activeChoices, this.state.searchTerm);
      });
    } else {
      target.classList.remove('bg-blue');
      target.classList.add('bg-red');
      this.setState({
        ...this.state,
        activeChoices: { ...activeChoices, [id]: true },
      }, (hello) => {
        submitUserInput(this.state.activeChoices, this.state.searchTerm);
      });
    }
  }

  handleButtonClick(event) {
    // const { target } = event;
    const id = event.target.id;
    const target = event.target
    this.updateClickedButton(target, id);
  }

  handleClearInput() {
    const { submitUserInput } = this.props;
    this.setState({
      ...this.state,
      searchTerm: '',
    }, () => {
      submitUserInput(this.state.activeChoices, this.state.searchTerm);
    });
  }

  render() {
    const { searchTerm } = this.state;
    const { articleIds } = this.props;
    return (
      <div className="flex bg-grey justify-center">
        <div className="container flex w-full">
          <div className="w-3/5 px-5">
            <h4 className="uppercase py-5">Choose Journals</h4>
            {articleIds.map(id => (
              <JournalButton id={id} handleButtonClick={this.handleButtonClick} />
            ))
            }
          </div>
          <div className="inline-block w-2/5">
            <form>
              <label id="search-term">
                <h4 className="py-5 uppercase">Search Term</h4>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="search-term"
                  type="text"
                  onChange={this.handleInputChange}
                  value={searchTerm}
                />
                <div className="mb-4">
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={this.handleClearInput}
                    className="mx-4 px-6 bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                  >
                    Clear
                  </button>
                </div>
              </label>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

UserInput.propTypes = {
  submitUserInput: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  articleIds: PropTypes.array.isRequired,
};

const JournalButton = ({ id, handleButtonClick }) => (
  <button id={id} type="submit" onClick={handleButtonClick} className="mx-2 bg-blue text-white font-bold py-2 px-4 rounded">{`Journal ${id}`}</button>
);

JournalButton.propTypes = {
  id: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default UserInput;

// const JournalChoice = val => (
//   <span
//     key={`journal-${val}`}
//     className="px-2"
//   >
//     {`Journal ${val}`}
//   </span>
// );
// const JournalChoiceContainer = choices => choices.map(JournalChoice);
