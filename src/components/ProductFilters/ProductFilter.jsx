import {selectCategories} from "../../redux/products/selectors";
import {connect} from "react-redux";

const tagStyle = "border p-1 rounded text-xs cursor-pointer"
const tagStyleSelect = "bg-blue-500 border-blue-700 text-white"

const ProductFilter = props => (
    <div>
        <span className="text-orange-600 font-bold">{props.name}</span>
        <div className="flex gap-2 mt-2 flex-wrap">

            {/*<span*/}
            {/*    className={[tagStyle, 'bg-orange-500 border-orange-700 text-white'].join(' ')}*/}
            {/*    onClick={this.props.clearFilters}*/}
            {/*>*/}
            {/*    Clear*/}
            {/*</span>*/}

            {props.categories.map((filter, i) =>
                <span
                    className={tagStyle}
                    // className={`${tagStyle} ${props.activeFilters.includes(filter) ? tagStyleSelect : ''}`}
                    key={i}
                    // onClick={() => props.toggleFilter(filter)}
                >
                    {filter}
                </span>)
            }

        </div>
    </div>
)

const mapStateToProps = state => ({
    categories: selectCategories(state)
})

export default connect(
    mapStateToProps
)(ProductFilter);