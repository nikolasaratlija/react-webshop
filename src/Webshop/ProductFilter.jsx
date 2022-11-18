import React, {Component} from 'react';

const tagStyle = "border p-1 rounded text-xs cursor-pointer"
const tagStyleSelect = "bg-blue-500 border-blue-700 text-white"

class ProductFilter extends Component {
    render() {
        return (
            <div>
                <span className="text-orange-600 font-bold">{this.props.name}</span>
                <div className="flex gap-2 mt-2 flex-wrap">

                    <span
                        className={[tagStyle, 'bg-orange-500 border-orange-700 text-white'].join(' ')}
                        onClick={this.props.clearFilters}
                    >
                        Clear
                    </span>

                    {this.props.filters.map((filter, i) =>
                        <span
                            className={`${tagStyle} ${this.props.activeFilters.includes(filter) ? tagStyleSelect : ''}`}
                            key={i}
                            onClick={() => this.props.toggleFilter(filter)}
                        >
                            {filter}
                        </span>
                    )}

                </div>
            </div>
        );
    }
}

export default ProductFilter;