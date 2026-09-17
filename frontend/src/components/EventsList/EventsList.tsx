import type { FC } from "react";
import type { EventDetails } from "../../types/events";
import { EventItemSkeleton } from "../EventItem/EventItemSkeleton";
import { EventItem } from "../EventItem";
import styles from './EventsList.module.scss';

interface Props {
  events: EventDetails[];
  isLoading: boolean;
}

export const EventsList: FC<Props> = ({ events, isLoading }) => {
  if (isLoading) {
    return (
      <ul className={styles.eventsList}>
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i}><EventItemSkeleton /></li>
        ))}
      </ul>
    );
  }

  if (events.length === 0) {
    return <div className={styles.emptyBlock}>No events match your filters.</div>;
  }

  return (
    <ul className={styles.eventsList}>
      {events.map((event) => (
        <li key={event.id} className={styles.eventListItem}>
          <EventItem event={event} />
        </li>
      ))}
    </ul>
  );
};