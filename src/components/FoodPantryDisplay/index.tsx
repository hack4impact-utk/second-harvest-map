import React, { FC } from 'react';
import { FoodPantry } from 'src/utils/types';
import FoodPantryContainer from 'src/components/FoodPantryContainer/index';
import { Pagination } from '@material-ui/lab';

interface Props {
  pantries: FoodPantry[];
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const FoodPantryDisplay: FC<Props> = ({ pantries, offset, setOffset }) => {
  // setState on pagination change
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    setOffset(page - 1);
  };

  // Get correct pantries to display
  const getPantriesToDisplay = (): FoodPantry[] => {
    // Syntax can be changed depending on what we decide on
    return (pantries.length < 3 && pantries) || pantries.slice(3 * offset, 3 * (offset + 1));
  };

  const renderPagination = (): JSX.Element => {
    const extraPage = pantries.length % 3 !== 0 ? 1 : 0;
    const pageCount = pantries.length - 3 > 0 ? Math.floor(pantries.length / 3) + extraPage : 1;
    return pageCount > 1 ? <Pagination page={offset + 1} count={pageCount} onChange={onPageChange} /> : <></>;
  };

  return (
    <>
      <FoodPantryContainer pantries={getPantriesToDisplay()} />
      {renderPagination()}
    </>
  );
};

export default FoodPantryDisplay;
