import React from "react";
import { Slider } from '@material-ui/core';

interface AdState {
  gender: string;
  age: string;
  consumer: boolean;
  smb: boolean;
  enterprise: boolean;
  rating: number;
}

interface Props {
  updateAd: (adState: AdState) => any;
}

class AdDemographics extends React.Component<Props, AdState> {

  constructor(props: Props) {
    super(props);

    this.state = {
      gender: '',
      age: '',
      consumer: false,
      smb: false,
      enterprise: false,
      rating: 10
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleTargetInput = this.handleTargetInput.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  // Sets state using a cast assuming the types are safe
  setStateKnownTypes(stateObject: any) {
    this.setState(stateObject as unknown as Pick<AdState, keyof AdState>);
  }

  // handles radio and select elements
  handleInput(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {

    const key = e.target.name;
    const value = e.target.value;
    this.setStateKnownTypes({ [key]: value });
  }


  // handle multiple-option checkbox
  handleTargetInput(e: React.ChangeEvent<HTMLInputElement>) {
    const booleanStateKey = e.target.value as keyof AdState;
    const currentValue = this.state[booleanStateKey];
    this.setStateKnownTypes({ [booleanStateKey]: !currentValue });
  }

  // handles rating slider
  handleSlider(e: React.ChangeEvent<{}>, value: number | number[]) {
    if (!Array.isArray(value)) {
      this.setState({
        rating: value
      });
    }
  }

  render() {
    const { updateAd } = this.props;
    return (
      <div>
        <form>
          <div>Gender:</div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleInput}
          /> Male
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleInput}
          /> Female
          <br />
          <div className="spacing"></div>
          <div>Age:</div>
          <select name="age" onChange={this.handleInput}>
            <option value="0-20">0 - 20</option>
            <option value="20-40">20 - 40</option>
            <option value="40-60">40 - 60</option>
            <option value="60+">60+</option>
          </select>
          <br />
          <div className="spacing"></div>
          <div>Ad Target Audience (check all that apply):</div>
          <input
            type="checkbox"
            name="target"
            value="consumer"
            onChange={this.handleTargetInput}
          /> Consumers
          <br />
          <input
            type="checkbox"
            name="target"
            value="smb"
            onChange={this.handleTargetInput}
          /> SMBs
          <br />
          <input
            type="checkbox"
            name="target"
            value="enterprise"
            onChange={this.handleTargetInput}
          /> Large Enterprises
          <br />
          <div className="spacing"></div>
          <div>Please rate our app!</div>
          <Slider
            defaultValue={10}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={10}
            valueLabelDisplay="auto"
            onChangeCommitted={this.handleSlider}
          />
          <div className="spacing"></div>
          <button
            type="button"
            onClick={() => {
              updateAd(this.state);
            }}
          >
            Complete
          </button>
        </form>
      </div>
    );
  }

};

export default AdDemographics;
