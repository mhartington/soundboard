import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from '@ionic/react';
import React, { useEffect } from 'react';
import './Home.css';
import { stop } from 'ionicons/icons';
const Home: React.FC = () => {
  const audioCtx = new Audio();
  useEffect(() => {}, [audioCtx]);

  const stopPlay = () => {
    audioCtx.pause();
    audioCtx.currentTime = 0;
  };
  const playAudio = (fileName: string) => {
    stopPlay();
    audioCtx.src = `/assets/mp3s/${fileName}`;
    audioCtx.play();
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={stopPlay}>
          <IonIcon src={stop} />
        </IonButton>
        <IonButton onClick={() => playAudio('Crowd-Applause-2.mp3')}>
          Clap
        </IonButton>
        <IonButton onClick={() => playAudio('Crowd-Boo.mp3')}>Boo</IonButton>
        <IonButton onClick={() => playAudio('Crowd-Laughter-3.mp3')}>
          Laughter
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
