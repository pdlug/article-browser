import React, { Component } from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {

  }

  render() {
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
          </div>

        </div>
      </div>
    );
  }
}

export default UserInput;
