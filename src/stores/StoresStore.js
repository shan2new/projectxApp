import { observable, action, computed, toJS,decorate } from 'mobx';
import axios from './Helper/axios';
import { hydrate } from 'react-dom';

class StoresStore {

  selectedStoreId = '';
  stores = [];
  isFetched = false;

  constructor() {
    this.hydrate();
  }

  hydrate() {
    axios.get('/producer/list')
      .then(({ data }) => {
        data.forEach((store) => {
          store.id = store._id;
          delete store._id
        });
        
        console.log(data);
        this.stores = data;

        this.isFetched = true;
      });
  }

  selectStore(storeId) {
    this.selectedStoreId = storeId;
  }


  get getStores() {
    return this.stores;
  }
}

decorate(StoresStore, {
  selectStore: observable,
  stores: observable,
  isFetched: observable,
  hydrate: action,
  selectStore: action,
  getStores: computed
});

const storesStore = window.storesStore = new StoresStore();

export default storesStore;