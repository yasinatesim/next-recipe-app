import React from 'react';

import { Meal } from '@/types/meal';

type Props = {
  meal: Meal;
};

import Image from 'next/image';

import ListItem from '../ListItem';

import styles from './Header.module.scss';

const Header: React.FC<Props> = ({ meal }) => {
  const { strMeal, strCategory, strArea, strTags, strMealThumb } = meal;

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{strMeal}</h1>
        <div>
          <ListItem detail={strCategory} label="Category" />
          <ListItem detail={strArea} label="Area" />
          <ListItem detail={strTags} label="Tags" />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          width={700}
          height={700}
          src={strMealThumb}
          alt={strMeal}
          placeholder="blur"
          blurDataURL={strMealThumb}
        />
      </div>
    </div>
  );
};

export default Header;
