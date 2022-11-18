import React, {Component} from 'react';

class PriceFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rangeValue: 0
        }
    }

    componentDidMount() {
        this.setState({rangeValue: this.props.range.max})
    }

    render() {
        return (
            <div>
                <input type="range" name="price"
                       min={this.props.range.min} max={this.props.range.max}/>
                <label htmlFor="price">{this.props.range.min} - {this.props.range.max}</label>
            </div>
        );
    }
}

export default PriceFilter;