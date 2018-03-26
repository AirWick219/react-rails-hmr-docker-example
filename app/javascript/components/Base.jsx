import React from "react"
import PropTypes from "prop-types"
import HelloWorld from "./HelloWorld"

class Base extends React.Component {
  render () {
    return (
      <HelloWorld greeting={this.props.greeting}/>
    );
  }
}

Base.propTypes = {
  greeting: PropTypes.string
};
export default Base
