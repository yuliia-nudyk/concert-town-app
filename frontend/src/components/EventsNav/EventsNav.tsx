//#region imports
import type { FC } from 'react';
import cn from 'classNames';
import { NavLink } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import styles from './EventsNav.module.scss';
//#endregion

export const EventsNav: FC = () => {
  const { user } = useAuth();

  return (
    <nav className={styles.tabs}>
      <NavLink
        to='/events'
        end
        className={({ isActive }) =>
          cn(styles.tab, { [styles.active]: isActive })
        }
      >
        All events
      </NavLink>
      <NavLink
        to='/events/my-registrations'
        className={({ isActive }) =>
          cn(styles.tab, { [styles.active]: isActive })
        }
      >
        My Registrations
      </NavLink>
      {user?.role !== 'customer' && (
        <NavLink
          to='/events/mine'
          className={({ isActive }) =>
            cn(styles.tab, { [styles.active]: isActive })
          }
        >
          My events
        </NavLink>
      )}
    </nav>
  );
};
