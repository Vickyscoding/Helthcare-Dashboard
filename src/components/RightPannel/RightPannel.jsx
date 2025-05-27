
import styles from './RightPannel.module.css';
import { CalendarDays, Stethoscope, Eye, HeartPulse, Brain } from 'lucide-react';
import {  Plus } from 'lucide-react';
import Appointments from '../AppointmentSection/Appointments'; 


const RightPanel = () => {
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();

  return (
    <div className={styles.rightPanel}>
      <div className={styles.rightIcons}>
            <img src="/avatar.png" alt="User" className={styles.avatar} />
            <button className={styles.addBtn}><Plus size={18} /></button>
          </div>
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          <CalendarDays size={20} className={styles.icon} />
          <h4>{`${currentMonth} ${currentYear}`}</h4>
        </div>
        <div className={styles.weekDays}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </div>
        <div className={styles.dates}>
          {[...Array(31)].map((_, i) => (
            <span key={i} className={i + 1 === currentDate ? styles.active : ''}>{i + 1}</span>
          ))}
        </div>
      </div>
      
      <Appointments />
       
      <div className={styles.schedule}>
        <h4>Upcoming Schedule</h4>
        <ul>
          <li><Stethoscope size={16} className={styles.icon} /> Health checkup - <span>Thu, 11:00 AM</span></li>
          <li><Eye size={16} className={styles.icon} /> Ophthalmologist - <span>Thu, 2:00 PM</span></li>
          <li><HeartPulse size={16} className={styles.icon} /> Cardiologist - <span>Sat, 12:00 AM</span></li>
          <li><Brain size={16} className={styles.icon} /> Neurologist - <span>Sat, 4:00 PM</span></li>
        </ul>
      </div>
    </div>
 
  );
};

export default RightPanel;
