import {RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack} from "@chakra-ui/react";

export const PriceFilter = () => (
    <div className="flex flex-col">
        <span className="text-orange-600 font-bold mb-2">Price Range</span>

        <span className="font-bold uppercase mb-1 text-xs">€12 - €1323</span>
        <RangeSlider
            colorScheme='orange'
            w={"33%"}
            aria-label={['min', 'max']}
            min={12}
            max={1323}
            defaultValue={[12, 1323]}
            onChangeEnd={val => console.log(val)}
        >
            <RangeSliderTrack>
                <RangeSliderFilledTrack/>
            </RangeSliderTrack>
            <RangeSliderThumb index={0}/>
            <RangeSliderThumb index={1}/>
        </RangeSlider>
    </div>
)


export default PriceFilter;