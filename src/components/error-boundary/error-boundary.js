import React, {Component} from 'react';
import './error-boundary.css'
import ErrorIndicator from './../error-indicator/error-indicator';
import R, {equals, evolve, not} from 'ramda'

class ErrorBoudary extends Component {

 state = {
     error: false
 }

componentDidCatch() {
this.setState({error: not})
// evolve({error: true})
}

render() {
    // equals(this.state.error, true);
    // console.log();
    if(this.state.error) {
        return <ErrorIndicator />
}
    return this.props.children
    }
}

export default ErrorBoudary