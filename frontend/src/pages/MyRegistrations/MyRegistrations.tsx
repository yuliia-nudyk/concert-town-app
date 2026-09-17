//#region imports
import { EventsList } from '../../components/EventsList';
import { EventsNav } from '../../components/EventsNav';
import { EventsSearchSort } from '../../components/EventsSearchSort';
import { PageHeader } from '../../components/PageHeader';
import { useMyRegistationsFilters } from './hooks/useMyRegistrationsFilters';
import styles from './MyRegistrations.module.scss';
//#endregion

export const MyRegistrations = () => {
  const { searchQuery, setSearchQuery, sortBy, setSortBy, events, isLoading } =
    useMyRegistationsFilters();

  return (
    <section className={styles.myRegistrations}>
      <EventsNav />

      <PageHeader
        title='My Registrations'
        subtitle="Events you're registered to attend."
      />

      <EventsSearchSort
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <EventsList events={events} isLoading={isLoading} />
    </section>
  );
};
