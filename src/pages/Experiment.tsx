import { useParams, useLocation } from 'react-router-dom';
import { ExperimentComplete } from '../components/ExperimentComplete';
import { Pair } from '../components/Pair';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { supabase } from '../services/supabaseClient';
import { useClient } from '../hooks/useClient';
import { PairType } from '../types';

interface LocationState {
  completedPairs: number;
}

export const Experiment = () => {
  // get exp id and corresponding pairs
  const { id } = useParams();
  const { data, error, isLoading } = useClient(
    supabase
      .from('pair')
      .select(`*, experiment ( prompt )`)
      .match({ experiment_id: id })
  );
  const pairs: PairType[] = data || [];

  // get completed pair from location and rewrite localStorage
  // TODO: what happens if user gets direct link to experiment? (protected route anyway?)
  const location = useLocation();
  const { completedPairs } = location.state as LocationState;
  const [startIdx, setStartIdx] = useLocalStorage(id, completedPairs);

  const renderExperimentContent = () => {
    return startIdx < pairs.length ? (
      <Pair idx={startIdx} pairs={pairs} setStartIdx={setStartIdx} />
    ) : (
      <ExperimentComplete />
    );
  };

  return (
    <div>
      <h1>This is the Experiment page: {id}</h1>
      {!isLoading && (
        <div>
          <div>{renderExperimentContent()}</div>
          <div>
            progress bar: {startIdx}/{pairs.length}
          </div>
        </div>
      )}
    </div>
  );
};
