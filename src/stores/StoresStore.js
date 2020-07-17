import { observable, action, computed } from 'mobx';
import axios from './Helper/axios';

class StoresStore {

  @observable selectedStore = '';
  @observable stores = [];

  constructor () {
    this.hydrate();
  }

  @action
  hydrate () {
    // this.stores = [
    //   {
    //     'h2': 'Header',
    //     'h3': 'I\'m a big deal',
    //     'p': 'Listen, I\'ve had a pretty messed up day...'
    //   },
    //   {
    //     'h2': 'Header',
    //     'h3': 'I\'m a big deal',
    //     'p': 'Listen, I\'ve had a pretty messed up day...'
    //   },
    //   {
    //     'h2': 'Header',
    //     'h3': 'I\'m a big deal',
    //     'p': 'Listen, I\'ve had a pretty messed up day...'
    //   },
    //   {
    //     'h2': 'Header',
    //     'h3': 'I\'m a big deal',
    //     'p': 'Listen, I\'ve had a pretty messed up day...'
    //   },
    //   {
    //     'h2': 'Header',
    //     'h3': 'I\'m a big deal',
    //     'p': 'Listen, I\'ve had a pretty messed up day...'
    //   }
    // ];
    axios.get('/products/list')
      .then(({data}) => {
        console.log(data.restaurants);
        this.stores = data.restaurants;
      });
  }

  @computed
  get getStores () {
    return this.stores;
  }
}

const storesStore = window.storesStore = new StoresStore();

export default storesStore;