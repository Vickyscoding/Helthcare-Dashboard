import React from 'react';
import styles from './HealthStatusCards.module.css';

const cardData = [
  { title: "Lungs", status: "Low Oxygen", color: "red", date: "23 May" },
  { title: "Teeth", status: "Healthy", color: "green", date: "21 May" },
  { title: "Bone", status: "Needs Check", color: "orange", date: "20 May" },
];

const HealthStatusCards = () => {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <div className={styles.card} key={index}>
          <h4 className={styles.title}>{card.title}</h4>
          <p className={styles.status} style={{ color: card.color }}>
            {card.status}
          </p>
          <p className={styles.date}>{card.date}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
