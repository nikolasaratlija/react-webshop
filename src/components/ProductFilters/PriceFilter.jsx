import {RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack} from "@chakra-ui/react";
import {selectCurrentPriceRange} from "../../redux/filter/priceFilter/selectors";
import {setPriceFilter} from "../../redux/filter/priceFilter/filterActions";
import {connect} from "react-redux";

export const PriceFilter = props => (
    <div className="flex flex-col">
        <span className="text-orange-600 font-bold mb-2">Price Range</span>

        <span className="font-bold uppercase mb-1 text-xs">€12 - €1323</span>
        <RangeSlider
            colorScheme='orange'
            w={"33%"}
            // eslint-disable-next-line
            aria-label={['min', 'max']}
            min={12}
            max={1323}
            defaultValue={[12, 1323]}
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
    currentPriceRange: selectCurrentPriceRange(state)
})

const mapDispatchToProps = dispatch => ({
    setPriceRange: value => dispatch(setPriceFilter(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceFilter);