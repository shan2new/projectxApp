import React from 'react';
import { inject, observer } from 'mobx-react';

import { Redirect, Route } from 'react-router-dom';
import { IonPage, IonContent, IonSlide, IonSlides, IonHeader, IonToolbar, IonRouterOutlet,
  IonTitle, IonTabs, IonTab, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, fastFood, map, informationCircle, person } from 'ionicons/icons';

import middle from './app/middle';
import profile from './app/profile';

import './Home.scss';

const Home = (props) => {
  return (
    <IonTabs >
      <IonRouterOutlet>
        <Route path="/app/schedule" component={middle} exact={true} />
        <Route path="/app/fast-food" component={middle} exact={true} />
        <Route path="/app/profile" component={profile} exact={true} />
        {/* <Router path="/app/fast-food/:id" component={} exact={true} /> */}
        <Route path="/app" render={() => <Redirect to="/app/schedule" />} exact={true} />
      </IonRouterOutlet>
      
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href='/app/schedule'>
          <IonIcon icon={calendar} />
          <IonLabel>Schedule</IonLabel>
          <IonBadge>6</IonBadge>
        </IonTabButton>

        <IonTabButton tab="fast-food" href='/app/fast-food'>
          <IonIcon icon={fastFood} />
          <IonLabel>Fast Food</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map" href='/app/profile'>
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default inject('storesStore')(observer(Home));