import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Scene } from 'aframe-react';
import { Loader } from '../../shared/ui/Loader';
import Video from './video.mp4';

import styles from './Video360.module.scss';

const SPACE_KEYCODE = 'Space';
const TIMEOUT_DELAY = 2000;

export const Video360 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const assetsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    assetsRef.current?.addEventListener('loaded', onLoad);
  }, [assetsRef.current]);

  useEffect(() => {
    if (!videoRef.current) return;

    const onKeyPress = (event: KeyboardEvent) => {
      if (event.code !== SPACE_KEYCODE) return;

      videoRef.current?.paused ? playVideo() : pauseVideo();
    };

    window.addEventListener('keypress', onKeyPress);

    return () => window.removeEventListener('keypress', onKeyPress);
  }, [videoRef.current]);

  const onLoad = () => setTimeout(() => setIsLoading(false), TIMEOUT_DELAY);

  const playVideo = () => {
    videoRef.current?.play();
    setIsVideoPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
    setIsVideoPlaying(false);
  };

  const isPlayButtonActive = !isVideoPlaying && !isLoading;

  return (
    <div>
      {isLoading && <Loader text={'Загрузка...'} />}

      {isPlayButtonActive && (
        <button className={styles.button_play} onClick={playVideo} />
      )}

      <Scene>
        <a-assets ref={assetsRef}>
          <video id="videoEntity" ref={videoRef} src={Video} preload="auto" />
        </a-assets>

        <a-camera reverse-mouse-drag="true" />

        <a-videosphere src="#videoEntity" rotation="0 -90 0" />
      </Scene>
    </div>
  );
};
