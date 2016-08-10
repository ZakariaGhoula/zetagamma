// actions/index.js
import {CALCULATE_RESPONSIVE_STATE} from 'redux-responsive'

export const calculateResponsiveState = () => {
    const {innerWidth, innerHeight, matchMedia} = window
    return {
        type: CALCULATE_RESPONSIVE_STATE,
        innerWidth,
        innerHeight,
        matchMedia
    }
}