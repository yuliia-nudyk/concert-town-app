//#region imports
import { PageHeader } from '../../components/PageHeader';
import { usePageTitle } from '../../hooks/usePageTitle';
import { EventsFilterBar } from './components/EventsFilterBar';
import { useEventFilters } from './hooks/useEventFilters';
import { useAuth } from '../../contexts/AuthContext';
import { EventsNav } from '../../components/EventsNav';
import { EventsSearchSort } from '../../components/EventsSearchSort';
import { EventsList } from '../../components/EventsList';
import styles from './Events.module.scss';
//#endregion

export const Events = () => {
  usePageTitle('Events');

  const { user } = useAuth();

  const {
    searchQuery,
    setSearchQuery,
    categorySlug,
    setCategorySlug,
    sortBy,
    setSortBy,
    events,
    hasActiveFilters,
    clearFilters,
    isLoading
  } = useEventFilters();

  return (
    <section className={styles.events}>
      {user && <EventsNav />}

      <PageHeader
        title='Events'
        subtitle='Discover and register for upcoming events.'
      />

      <div className={styles.toolbar}>
        <EventsSearchSort
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <EventsFilterBar
          categorySlug={categorySlug}
          setCategorySlug={setCategorySlug}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={clearFilters}
        />
      </div>

      <EventsList events={events} isLoading={isLoading} />
    </section>
  );
};
