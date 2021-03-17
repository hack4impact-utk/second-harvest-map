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
  // Set default offset to 0
  componentWillMount() {
    this.setState({
      offset: 0
    })
  }

  // Get correct pantries to display
  getPantriesToDisplay = () => {
    const { pantries } = this.props
    const { offset } = this.state
    return pantries
  }

  render() {
    const { pantries } = this.props
    const { offset } = this.state

    return (
      <div>
        <FoodPantryContainer pantries={this.getPantriesToDisplay()} />
        <Pagination page={offset + 1} count={pantries.length} />
      </div>
    )
  }
}

export default FoodPantryDisplay
