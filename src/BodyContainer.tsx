import React from "react";
import { FullPage, Slide } from "react-full-page";
import styles from "./BodyContainer.module.scss";
import BackSrc from "./assets/spaceback.jpg";
import GameContainer from "./GameContainer";
import DescriptionContainer from "./DescriptionContainer";

export function BodyContainer() {
  return (
    <div className={styles.container}>
      <FullPage controls>
        <Slide>
          <GameContainer />
        </Slide>
        <Slide>
          <DescriptionContainer />
        </Slide>
        <Slide>
          <DescriptionContainer />
        </Slide>
      </FullPage>
      <img className={styles.backImg} src={BackSrc} alt="back" />
    </div>
  );
}

export default BodyContainer;
