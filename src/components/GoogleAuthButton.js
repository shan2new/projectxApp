import React from 'react'
import { observer, inject } from 'mobx-react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from '../stores/Helper/axios';
import _ from 'lodash';
import { IonGrid, IonRow,IonCol } from '@ionic/react';

const CLIENT_ID = '159205357066-ljvp0q00ev7eq4gim0vj6c4r23j60695.apps.googleusercontent.com';


const GoogleAuthButton =  (props) => {

  const profileStore = _.get(props, 'profileStore');

  let login =  async (response)  => {
    if(response.accessToken){
      const reqObj = {
        "name": response.profileObj.name,
        "identifierId": response.profileObj.googleId,
        "email": response.profileObj.email
      }
      const fetchUser = await axios.get('/consumer/' + response.profileObj.googleId)
        .then(({data}) => {
          localStorage.accessToken = response.accessToken;
          localStorage.identifierId = response.profileObj.googleId;
          return data
        })
      if(fetchUser) {
        profileStore.login(fetchUser.name);
        localStorage.accessToken = response.accessToken;
        localStorage.identifierId = response.profileObj.googleId;
      } else {
        axios.post('/consumer/new', reqObj)
          .then(({data}) => {
            profileStore.login(data.name);
          })
          .catch((error) => {
            console.log("An error occured")
          });
      }

    }
  }

  let logout =  (response) => {  
    console.log("Loggedout Guys")  
    window.localStorage.removeItem('identifierId')
    profileStore.logout();
  }

  let handleLoginFailure = (response) => {
    console.log(response)
    alert('Failed to log in')
  }

  let handleLogoutFailure = (response) => {
    alert('Failed to log out')
  }

  const LoggedInScreen = () => {
    return (
    <GoogleLogin
      clientId={ CLIENT_ID }
      buttonText='Login'
      onSuccess={ login }
      onFailure={ handleLoginFailure }
      cookiePolicy={ 'single_host_origin' }
      responseType='code,token'
    />
    )
  }

  profileStore.silentLogin();

  return (
    <IonGrid>
    <IonRow className="ion-justify-content-center">
    <IonCol className="ion-text-center">
      <h1>{profileStore.getName}</h1>
      </IonCol>
    </IonRow>
    <IonRow className="ion-justify-content-center">
    <IonCol className="ion-text-center">
      { profileStore.getIsLoggedIn ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ logout }
          onFailure={ handleLogoutFailure }
        >
        </GoogleLogout>: <LoggedInScreen/>
      }
      </IonCol>
    </IonRow>
    </IonGrid>
    )
}

export default inject('profileStore')(observer(GoogleAuthButton));