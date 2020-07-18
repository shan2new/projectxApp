import { observable, action, computed, toJS } from 'mobx';
import axios from './Helper/axios';

class StoresStore {

  @observable selectedStoreId = '';
  @observable stores = [];
  @observable isFetched = false;

  constructor () {
    this.hydrate();
  }

  @action
  hydrate () {
    axios.get('/products/list')
      .then(({data}) => {
        console.log(data.restaurants);
        this.stores = data.restaurants;

        this.isFetched = true;
      });
  }

  @action
  selectStore (storeId) {
    this.selectedStoreId = storeId;
  }

  @computed
  get getStores () {
    return this.stores;
  }
}

const storesStore = window.storesStore = new StoresStore();

export default storesStore;