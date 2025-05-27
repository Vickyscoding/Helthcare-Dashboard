import styles from './Header.module.css';
import { Search, Bell } from 'lucide-react';
const Header = () => {
  return (
    <header className={styles.header}>
      
      <div className={styles.searchBar}>
        <Search size={18} />
        <input type="text" placeholder="Search..."  />
        <Bell size={18} />
      </div>
      
    </header>
  );
};

export default Header;