import React from 'react';

import styles from './ListItem.module.scss';

interface Props {
  detail: any;
  label: string;
  link?: string;
}

const List: React.FC<Props> = ({ detail, label, link = '' }) => {
  return (
    <>
      {detail && (
        <li key={label} className={styles.item}>
          <span className={styles.label}>{label}:</span>
          {link ? (
            <a href={link}>{detail}</a>
          ) : (
            <span className={styles.text}>{detail}</span>
          )}
        </li>
      )}
    </>
  );
};

export default List;
