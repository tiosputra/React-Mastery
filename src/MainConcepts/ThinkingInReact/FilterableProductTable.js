import React, { useState } from 'react';
import data from './productdata.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const PRODUCTS = data;

  function handleFilterTextChange(filterText) {
    setFilterText(filterText);
  }

  function handleInStockChange(inStockOnly) {
    setInStockOnly(inStockOnly);
  }

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />

      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
    </div>
  );
}

export default FilterableProductTable;
