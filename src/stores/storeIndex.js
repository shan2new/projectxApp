import React from 'react';
import { Provider } from "mobx-react";

import storesStore from './StoresStore';

const Stores = (props) => {
  return (
    <Provider storesStore={storesStore} >
      {props.children}
    </Provider>
  )
}

export default Stores;