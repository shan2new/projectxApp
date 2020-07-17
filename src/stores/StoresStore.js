import { observable, action, computed } from 'mobx';
import axios from './Helper/axios';

class StoresStore {

  @observable selectedOrder = '';
  @observable orders = [];

  constructor () {
    this.hydrate();
  }

  @action
  hydrate () {
    axios.get('/')
      .then((data) => {
        
      });
  }

  @computed
  get orders () {
    return this.orders;
  }
}

const storesStore = window.storesStore = new StoresStore();

export default storesStore;