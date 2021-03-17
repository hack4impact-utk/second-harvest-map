import React, { Component } from 'react'
import { FoodPantry } from 'utils/types'

type CardDisplayState = {
  pantries: FoodPantry[],
  offset: number
}

class FoodPantryDisplay extends Component<{}, CardDisplayState> {
  render() {
    return (
      <div>
        FoodPantryDisplay
      </div>
    )
  }
}

export default FoodPantryDisplay;
