import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './RecipeCard.module.scss';

import { Meal } from '@/types/meal';

type Props = {
  recipe: Meal
};

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const shortInstructions = recipe.strInstructions.length > 50 ? `${recipe.strInstructions.substring(0, 50)}...` : recipe.strInstructions;
  const [loading, setLoading] = React.useState<boolean>(true);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={700}
          height={700}
          placeholder="blur"
          blurDataURL={recipe.strMealThumb}
          onLoad={() => setLoading(false)}
          style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{recipe.strMeal}</div>
        <div className={styles.description}>{shortInstructions}</div>
        <div className={styles.category}>
          {recipe.strCategory} - {recipe.strArea}
        </div>
        {recipe.strInstructions.length > 50 && (
          <Link
            className={styles.button}
            href={`/meal-detail/${recipe.idMeal}`}
          >
            View Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
