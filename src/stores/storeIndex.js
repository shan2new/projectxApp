import React from 'react';
import { Provider } from "mobx-react";

import storesStore from './StoresStore';
import selectedStore from './SelectedStore';

const Stores = (props) => {
  return (
    <Provider storesStore={storesStore} selectedStore={selectedStore} >
      {props.children}
    </Provider>
  )
}

export default Stores;