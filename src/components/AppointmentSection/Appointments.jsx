import React from 'react';
import styles from './Appointments.module.css';
import { Syringe, Dumbbell } from 'lucide-react';

const Appointments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardDentist}>
        <div className={styles.title}>
          <span>Dentist</span>
          <Syringe size={16} />
        </div>
        <div className={styles.time}>09:00–11:00</div>
        <div className={styles.doctor}>Dr. Cameron Williamson</div>
      </div>

      <div className={styles.cardPhysio}>
        <div className={styles.title}>
          <span>Physiotherapy Appointment</span>
          <Dumbbell size={16} />
        </div>
        <div className={styles.time}>11:00–12:00</div>
        <div className={styles.doctor}>Dr. Kevin Djones</div>
      </div>
    </div>
  );
};

export default Appointments;
