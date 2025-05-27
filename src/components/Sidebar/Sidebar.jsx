
import styles from './Sidebar.module.css';
import { LayoutDashboard, History, CalendarDays, ClipboardList, BarChart2, FlaskConical, MessageCircle, LifeBuoy, Settings } from 'lucide-react';

const navItems = [
  { icon: <LayoutDashboard />, label: 'Dashboard' },
  { icon: <History />, label: 'History' },
  { icon: <CalendarDays />, label: 'Calendar' },
  { icon: <ClipboardList />, label: 'Appointments' },
  { icon: <BarChart2 />, label: 'Statistics' },
  { icon: 'Tools' },
  { icon: <MessageCircle />, label: 'Chat' },
  { icon: <LifeBuoy />, label: 'Support' },
  { icon: <Settings />, label: 'Setting' },
];

const Sidebar = () => {
  return (<>
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Healthcare.</div>
      <h2 className={styles.heading}>General</h2>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <span className={styles.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
    </>
  );
};

export default Sidebar;
