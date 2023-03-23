import React from 'react';

import ListItem from '../ListItem';

import styles from './Content.module.scss';

import { Meal } from '@/types/meal';

type Props = {
	meal: Meal;
}

const Content: React.FC<Props> = ({ meal }) => {

  const { strInstructions, strSource, strYoutube } = meal;

  return (
    <>
      <p className={styles.description}>{strInstructions}</p>
      <ul className={styles.list}>
        <ListItem detail={strSource} label="Source" />

        <ListItem detail={strYoutube} label="Youtube" link={`https://www.youtube.com/watch?v=${strYoutube}`} />
      </ul>
    </>
  );
};

export default Content;
