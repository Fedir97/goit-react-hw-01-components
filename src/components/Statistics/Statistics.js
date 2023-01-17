import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"
const randomColor = () =>{
  const color = 'rgba(' +
  Math.round(Math.random() * 255) +
  ',' +
  Math.round(Math.random() * 255) +
  ',' +
  Math.round(Math.random() * 255) +
  ',' +
  0.5 +
  ')';

return color;
}
function Statistics({ title, stats}){
    return (

        <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
  
        <ul className={styles.stats_list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={styles.stats}
                key={id}
                style={{ backgroundColor: randomColor() }}
              >
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}

export default Statistics