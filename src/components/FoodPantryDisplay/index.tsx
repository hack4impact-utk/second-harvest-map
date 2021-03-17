import React, { Component } from 'react'
import { FoodPantry } from 'utils/types'
import FoodPantryContainer from 'src/components/FoodPantryContainer/index'
import { Pagination } from '@material-ui/lab'

interface Props {
  pantries: FoodPantry[]
}

interface CardDisplayState {
  offset: number
}

class FoodPantryDisplay extends Component<Props, CardDisplayState> {
  render() {
    return (
      <div>
        <FoodPantryContainer pantries={this.props.pantries} />
        <Pagination />
      </div>
    )
  }
}

export default FoodPantryDisplay
