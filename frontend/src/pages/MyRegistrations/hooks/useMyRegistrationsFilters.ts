//#region imports
import { useSearchParams } from 'react-router';
import { useUpdateSearchParam } from '../../../hooks/useUpdateSearchParam';
import { useAuth } from '../../../contexts/AuthContext';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';
import { useEffect, useState } from 'react';
import type { EventDetails } from '../../../types/events';
import type { SortBy } from '../../Events/utils/sortOptions';
import { getRegistrations } from '../../../api/bookings/bookingsService';
import { useEvents } from '../../../contexts/EventContext';
//#endregion

export function useMyRegistationsFilters () {
  const [searchParams] = useSearchParams();
  const updateSearchParam = useUpdateSearchParam();
  const { events: allEvents } = useEvents();
  const { token } = useAuth();

  const searchQuery = searchParams.get('search') ?? '';
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 400);
  const sortBy = (searchParams.get('sort') as SortBy) ?? 'date';

  const [events, setEvents] = useState<EventDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMyEvents () {
      if (!token) return;
      setIsLoading(true);
      try {
        const response = await getRegistrations(
          {
            search: debouncedSearchQuery || undefined,
            ordering: sortBy
          },
          token
        );

        const registeredIds = new Set(response.results.map(r => r.event));
        setEvents(allEvents.filter(e => registeredIds.has(e.id)));
      } finally {
        setIsLoading(false);
      }
    }
    fetchMyEvents();
  }, [token, debouncedSearchQuery, sortBy, allEvents]);

  const setSearchQuery = (value: string) =>
    updateSearchParam({ search: value || null });
  const setSortBy = (sort: SortBy) => updateSearchParam({ sort });

  return { searchQuery, setSearchQuery, sortBy, setSortBy, events, isLoading };
}
