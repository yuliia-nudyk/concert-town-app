//#region imports
import { useAuth } from '../contexts/AuthContext';
import { useRegistrations } from '../contexts/RegistrationsContext';
import type { EventDetails } from '../types/events';
//#endregion

export function useEventRelation (
  event: EventDetails | undefined
): 'organizing' | 'attending' | undefined {
  const { user } = useAuth();
  const { registrations } = useRegistrations();

  if (!event) return;
  if (!user) return undefined;
  const isRegistered = registrations.some(r => r.event === event.id);

  if (isRegistered) return 'attending';
  if (event.organizerId === user.id) return 'organizing';

  return undefined;
}
