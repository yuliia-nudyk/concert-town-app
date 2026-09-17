//#region imports
import { EventsNav } from '../../components/EventsNav';
import { PageHeader } from '../../components/PageHeader';
import { useMyEventFilters } from './hooks/useMyEventFilters';
import { EventsSearchSort } from '../../components/EventsSearchSort';
import { EventsList } from '../../components/EventsList';
import styles from './MyEvents.module.scss';
//#endregion

export const MyEvents = () => {
  const { events, searchQuery, setSearchQuery, sortBy, setSortBy, isLoading } =
    useMyEventFilters();

  return (
    <section className={styles.myEvents}>
      <EventsNav />

      <PageHeader
        title='My Events'
        subtitle='Manage and track all of your events.'
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
