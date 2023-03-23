import React from 'react';

import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import RecipeList from '@/components/RecipeList';

import { getMealList } from '@/services/meal';
import { Meal } from '@/types/meal';

type Props = {
  recipes: Meal[];
};

const Home: NextPage<Props> = ({ recipes }) => {
  return (
    <>
      <Head>
        <title>Next Recipe App</title>
        <meta name="description" content="Next Recipe App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <RecipeList recipes={recipes} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { meals } = await getMealList();
  const recipes = meals || [];

  return {
    props: { recipes },
  };
};

export default Home;
