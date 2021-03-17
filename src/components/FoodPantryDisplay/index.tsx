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
  state = {offset: 0}

  // setState on pagination change
  onPageChange = (event: object, page: number) => {
    this.setState({
      offset: page - 1
    })
  }

  // Get correct pantries to display
  getPantriesToDisplay = () => {
    const { pantries } = this.props
    const { offset } = this.state

    // Syntax can be changed depending on what we decide on
    return pantries.length < 3 && pantries
      || pantries.slice(offset, offset + 3)
  }

  render() {
    const { pantries } = this.props
    const { offset } = this.state
    const pageCount: number = (pantries.length - 3 > 0) ? pantries.length - 3 : 1

    return (
      <div>
        <FoodPantryContainer pantries={this.getPantriesToDisplay()} />
        <Pagination page={offset + 1} count={pageCount} onChange={this.onPageChange} />
      </div>
    )
  }
}

export default FoodPantryDisplay
