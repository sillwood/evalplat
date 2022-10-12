import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ExperimentComplete } from '../components/ExperimentComplete';
import { Pair } from '../components/Pair';
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
  // TODO: error handling

  const pairs: PairType[] = data || [];

  // get completed pair from location
  const location = useLocation();
  const { completedPairs } = location.state as LocationState;
  const [startIdx, setStartIdx] = useState(completedPairs);

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
