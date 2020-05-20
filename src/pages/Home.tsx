import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import React, { useRef } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudio = async (fileName: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = `/assets/mp3s/${fileName}`;
      audioRef.current.play();
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => playAudio('Crowd-Applause-2.mp3')}>Clap</IonButton>
        <IonButton onClick={() => playAudio('Crowd-Boo.mp3')}>Boo</IonButton>
        <IonButton onClick={() => playAudio('Crowd-Laughter-3.mp3')}>Laughter</IonButton>
        <audio ref={audioRef}></audio>
      </IonContent>
    </IonPage>
  );
};

export default Home;
