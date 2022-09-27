import { useAuth } from '../hooks/useAuth';
import { ExperimentCard } from '../components/ExperimentCard';
import { supabase } from '../services/supabaseClient';
import { useClient } from '../hooks/useClient';

export const Dashboard = () => {
  const { token } = useAuth();
  const {
    data: experiments,
    error,
    isLoading,
  } = useClient(supabase.from('experiment').select(`*, pair ( id )`));
  // TODO: get { count: exact } to work for joins
  // TODO: error handling

  const renderExperiments = (experiments) => {
    return experiments.map((experiment) => (
      <ExperimentCard key={experiment.id} experiment={experiment} />
    ));
  };

  return (
    <div>
      <h1>This is the Dashboard page</h1>
      <h3>token: {token}</h3>
      {!isLoading && <ul>{renderExperiments(experiments)}</ul>}
    </div>
  );
};
