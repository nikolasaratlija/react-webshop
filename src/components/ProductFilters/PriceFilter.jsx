import {RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack} from "@chakra-ui/react";
import {selectCurrentPriceRange, selectProductsPriceRange} from "../../redux/filter/priceFilter/selectors";
import {setPriceFilter} from "../../redux/filter/priceFilter/filterActions";
import {connect} from "react-redux";

export const PriceFilter = props => (

    <div className="flex flex-col">
        <span className="text-orange-600 font-bold mb-2">Price Range</span>

        <span className="font-bold uppercase mb-1 text-xs">
            €{props.currentPriceRange.min ?? props.productsPriceRange.min} -
            €{props.currentPriceRange.max ?? props.productsPriceRange.max}
        </span>
        <RangeSlider
            colorScheme='orange'
            w={"33%"}
            // eslint-disable-next-line
            aria-label={['min', 'max']}
            min={props.productsPriceRange.min}
            max={props.productsPriceRange.max}
            defaultValue={[props.productsPriceRange.min, props.productsPriceRange.max]}
            onChangeEnd={val => props.setPriceRange({min: val[0], max: val[1]})}
        >
            <RangeSliderTrack>
                <RangeSliderFilledTrack/>
            </RangeSliderTrack>
            <RangeSliderThumb index={0}/>
            <RangeSliderThumb index={1}/>
        </RangeSlider>
    </div>
)

const mapStateToProps = state => ({
    currentPriceRange: selectCurrentPriceRange(state),
    productsPriceRange: selectProductsPriceRange(state)
})

const mapDispatchToProps = dispatch => ({
    setPriceRange: value => dispatch(setPriceFilter(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceFilter);