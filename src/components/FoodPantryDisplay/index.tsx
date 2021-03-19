import React, { Component } from 'react';
import { FoodPantry } from 'utils/types';
import FoodPantryContainer from 'src/components/FoodPantryContainer/index';
import { Pagination } from '@material-ui/lab';

interface Props {
  pantries: FoodPantry[];
}

interface CardDisplayState {
  offset: number;
}

class FoodPantryDisplay extends Component<Props, CardDisplayState> {
  // Set default offset to 0
  constructor(props: Props) {
    super(props);
    this.state = { offset: 0 };
  }

  // setState on pagination change
  onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    this.setState({
      offset: page - 1,
    });
  };

  // Get correct pantries to display
  getPantriesToDisplay = () => {
    const { pantries } = this.props;
    const { offset } = this.state;

    // Syntax can be changed depending on what we decide on
    return (pantries.length < 3 && pantries) || pantries.slice(offset, offset + 3);
  };

  renderPagination = () => {
    const { pantries } = this.props;
    const { offset } = this.state;
    const pageCount: number = pantries.length - 3 > 0 ? pantries.length - 3 : 1;
    return pageCount > 1 && <Pagination page={offset + 1} count={pageCount} onChange={this.onPageChange} />;
  };

  render() {
    return (
      <div>
        <FoodPantryContainer pantries={this.getPantriesToDisplay()} />
        {this.renderPagination}
      </div>
    );
  }
}

export default FoodPantryDisplay;
