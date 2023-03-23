import React, { useEffect, useState } from 'react';

import RecipeCard from '../RecipeCard';

import styles from './RecipeList.module.scss';

import { getMealSearch } from '@/services/meal';
import { Meal } from '@/types/meal';

type Props = {
  recipes: Meal[];
};

const RecipeList: React.FC<Props> = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        if (searchTerm) {
          const {meals} = await getMealSearch({ searchTerm });
          setMeals(meals || []);
        } else {
          setMeals([]);
        }
      } catch (error) {
        console.error(error);
      }
    }, 500);


    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <h1>Recipes</h1>

      <input
        className={styles.input}
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search meals..."
      />

      <div className={styles.cards}>
        {meals.length > 0
          ? meals.map((meal) => <RecipeCard key={meal.idMeal} recipe={meal} />)
          : recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default RecipeList;
