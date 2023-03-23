import React from 'react';

import { useRouter } from 'next/router';

import { IconArrowLeft } from '@/assets/icons';

import Content from './components/Content';
import Header from './components/Header';

import styles from './MealDetail.module.scss';

import { Meal } from '@/types/meal';

type Props = {
  meal: Meal;
};

const MealDetail: React.FC<Props> = ({ meal }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <button className={styles.back} onClick={handleGoBack}>
            <IconArrowLeft />
            <span>Back to Recipes</span>
          </button>

          <Header meal={meal} />
          <Content meal={meal} />
        </div>
      </div>
    </>
  );
};

export default MealDetail;
