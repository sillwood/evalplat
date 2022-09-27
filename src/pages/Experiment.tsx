import { useParams } from 'react-router-dom';
import { ExperimentComplete } from '../components/ExperimentComplete';
import { Pair } from '../components/Pair';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { supabase } from '../services/supabaseClient';
import { useClient } from '../hooks/useClient';
import { PairType } from '../types';

export const Experiment = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useClient(
    supabase
      .from('pair')
      .select(`*, experiment ( prompt )`)
      .match({ experiment_id: id })
  );
  const pairs: PairType[] = data || [];

  // one for userId progress on particular experiment
  // check localstorage to see if experimentId: currentIdx exists, if not, fetch currentIdx
  // const { completedIdx }: number = useFetch("url.userId.com/experimentId");
  const completedIdx = 0;

  const [startIdx, setStartIdx] = useLocalStorage(id, completedIdx);

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
