import React from 'react';
import { IonTab, IonPage, IonContent, IonSlides, IonSlide, IonList, IonTitle, IonHeader, IonToolbar, IonListHeader, IonItem, IonLabel } from '@ionic/react';


export const middle = () => {
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>

          <IonListHeader>
            Recent Conversations
          </IonListHeader>

          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-finn.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-han.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Han</h2>
              <h3>Look, kid...</h3>
              <p>I've got enough on my plate as it is, and I...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-rey.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Rey</h2>
              <h3>I can handle myself</h3>
              <p>You will remove these restraints and leave...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-luke.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Luke</h2>
              <h3>Your thoughts betray you</h3>
              <p>I feel the good in you, the conflict...</p>
            </IonLabel>
          </IonItem>

        </IonList>

        <IonList>

          <IonListHeader>
            Recent Conversations
          </IonListHeader>

          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-finn.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-han.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Han</h2>
              <h3>Look, kid...</h3>
              <p>I've got enough on my plate as it is, and I...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-rey.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Rey</h2>
              <h3>I can handle myself</h3>
              <p>You will remove these restraints and leave...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-luke.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Luke</h2>
              <h3>Your thoughts betray you</h3>
              <p>I feel the good in you, the conflict...</p>
            </IonLabel>
          </IonItem>

        </IonList>

        <IonList>

          <IonListHeader>
            Recent Conversations
          </IonListHeader>

          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-finn.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-han.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Han</h2>
              <h3>Look, kid...</h3>
              <p>I've got enough on my plate as it is, and I...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-rey.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Rey</h2>
              <h3>I can handle myself</h3>
              <p>You will remove these restraints and leave...</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            {/* <ion-avatar slot="start">
            <img src="./avatar-luke.png">
          </ion-avatar> */}
            <IonLabel>
              <h2>Luke</h2>
              <h3>Your thoughts betray you</h3>
              <p>I feel the good in you, the conflict...</p>
            </IonLabel>
          </IonItem>

        </IonList>
      </IonContent>
    </IonPage >
  )
}