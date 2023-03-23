import React from 'react';

import MealDetail from '@/containers/MealDetail/MealDetail';
import { getMealDetail } from '@/services/meal';
import { Meal } from '@/types/meal';

const MealDetailPage: React.FC<{ meal: Meal }> = ({ meal }) => {
  return <MealDetail meal={meal} />;
};

export default MealDetailPage;

export async function getServerSideProps({ query }: { query: { id: string } }) {
  const { id } = query;

  try {
    const { meals } = await getMealDetail({ id });
    const meal = meals[0] || null;

    return {
      props: {
        meal,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        meal: null,
      },
    };
  }
}
