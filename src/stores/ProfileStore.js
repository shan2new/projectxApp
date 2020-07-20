import { observable, action, computed, toJS } from 'mobx';
import axios from './Helper/axios';

class ProfileStore {

  @observable name = '';
  @observable isLoggedIn = false;

  @action
  setName (name) {
    this.name = name;
  }

  @action
  logout () {
    this.name = '';
    this.isLoggedIn = false;
  }

  @action
  login (name) {
    console.log("Did I came here?", name)
    this.name = name;
    this.isLoggedIn = true;
  }

  @action
  async silentLogin() {
    if(!localStorage.identifierId) {
      return;
    }

    const fetchUser = await axios.get('/consumer/' + localStorage.identifierId)
    .then(({data}) => {
      console.log("Yo")
      return data
    })
    this.login(fetchUser.name)

  }

  @computed
  get getName () {
    return this.name;
  }

  @computed
  get getIsLoggedIn () {
    return this.isLoggedIn;
  }
  
}

const profileStore = window.profileStore = new ProfileStore();

export default profileStore;