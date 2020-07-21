import { observable, action, computed, toJS, decorate} from 'mobx';
import axios from './Helper/axios';

class ProfileStore {

  name = '';
  isLoggedIn = false;

  setName (name) {
    this.name = name;
  }

  logout () {
    this.name = '';
    this.isLoggedIn = false;
  }

  login (name) {
    console.log("Did I came here?", name)
    this.name = name;
    this.isLoggedIn = true;
  }

  async silentLogin() {
    console.log("localStorage.identifierId", localStorage.identifierId)
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

  get getName () {
    return this.name;
  }

  get getIsLoggedIn () {
    return this.isLoggedIn;
  }
  
}

decorate(ProfileStore, {
  name: observable,
  isLoggedIn: observable,
  setName: action,
  logout: action,
  login: action,
  setStoreBoolean: action,
  silentLogin: action,
  getName: computed,
  getIsLoggedIn: computed
,});

const profileStore = window.profileStore = new ProfileStore();

export default profileStore;