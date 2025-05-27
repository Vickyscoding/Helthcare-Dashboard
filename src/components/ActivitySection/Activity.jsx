
import styles from './Activity.module.css';
import { Activity as ActivityIcon } from 'lucide-react';

const Activity = () => {
  const weeklyData = [
    { day: 'Mon', bars: [30, 60, 90] },
    { day: 'Tue', bars: [40, 50] },
    { day: 'Wed', bars: [20, 45, 70] },
    { day: 'Thu', bars: [90, 60] },
    { day: 'Fri', bars: [80, 50, 30] },
    { day: 'Sat', bars: [40, 60] },
    { day: 'Sun', bars: [50, 75] },
  ];

  const barColors = ['#06b6d4', '#6366f1', '#8b5cf6']; // cyan, indigo, violet

  return (
    <div className={styles.activityContainer}>
      <div className={styles.header}>
        <h3><ActivityIcon size={16} style={{ marginRight: '5px' }} /> Activity</h3>
        <span>3 appointment on this week</span>
      </div>

      <div className={styles.chart}>
        {weeklyData.map((item, idx) => (
          <div key={idx} className={styles.barGroup}>
            <div className={styles.bars}>
              {item.bars.map((value, barIdx) => (
                <div
                  key={barIdx}
                  className={styles.barFill}
                  style={{
                    height: `${value}px`,
                    backgroundColor: barColors[barIdx % barColors.length],
                  }}
                ></div>
              ))}
            </div>
            <div className={styles.dayLabel}>{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
