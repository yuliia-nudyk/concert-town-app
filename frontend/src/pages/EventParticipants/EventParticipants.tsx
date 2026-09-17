//#region imports
import { useParams } from 'react-router';
import { usePageTitle } from '../../hooks/usePageTitle';
import { BackLink } from '../../components/BackLink/BackLink';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { useEvents } from '../../contexts/EventContext';
import { ParticipantsTable } from './components/ParticipantsTable';
import { useParticipants } from './hooks/useParticipants';
import { useAuth } from '../../contexts/AuthContext';
import { ErrorPage } from '../ErrorPage';
import { EventNotFound } from '../EventNotFound';
import styles from './EventParticipants.module.scss';
//#endregion

export const EventParticipants = () => {
  const { id } = useParams<{ id: string }>();
  const { events } = useEvents();
  const { participants } = useParticipants(Number(id));
  const { user } = useAuth();

  const event = events.find(e => e.id === Number(id));

  usePageTitle(event ? `Participants — ${event.title}` : 'Participants');

  if (!event) {
    return <EventNotFound />;
  }

  if (event.organizerId !== user?.id) {
    return (
      <ErrorPage
        type='access-denied'
        title='Access denied'
        subtitle="You don't have permission to view the participants."
        buttonText='Back to event'
        backTo={`/events/${event.id}`}
      />
    );
  }

  return (
    <section className={styles.eventParticipants}>
      <div className={styles.topBar}>
        <BackLink to={`/events/${event.id}`} label='Back to event' />

        <PageHeader
          title='Participants'
          subtitle={`${participants.length} people registered for ${event.title}.`}
        />
      </div>

      <ParticipantsTable participants={participants ?? []} />
    </section>
  );
};
