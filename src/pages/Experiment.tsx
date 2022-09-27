import { useParams } from 'react-router-dom';
import { ExperimentComplete } from '../components/ExperimentComplete';
import { Pair } from '../components/Pair';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { PairType } from '../types';

export const Experiment = () => {
  const { id } = useParams();
  // two fetches: one for Experiment: with meta & pairs
  // const { pairs }: Pair[] = experiment;
  const prompt = 'i am the prompt from the GET request experiment meta';
  const pairs: PairType[] = [
    {
      pairId: '00021',
      choiceA: 'hi im media one',
      choiceB: 'hi im media two',
      experimentId: 'ex12321',
    },
    {
      pairId: '0034',
      choiceA: 'hi im media one :)',
      choiceB: 'hi im media two :P',
      experimentId: 'ex12321',
    },
    {
      pairId: '0054',
      choiceA: 'oneee',
      choiceB: 'twooooo',
      experimentId: 'ex12321',
    },
  ];

  // one for userId progress on particular experiment
  // check localstorage to see if experimentId: currentIdx exists, if not, fetch currentIdx
  // const { completedIdx }: number = useFetch("url.userId.com/experimentId");
  const completedIdx = 0;

  const [startIdx, setStartIdx] = useLocalStorage(id, completedIdx);

  const renderExperimentContent = () => {
    return startIdx < pairs.length ? (
      <Pair
        prompt={prompt}
        idx={startIdx}
        pairs={pairs}
        setStartIdx={setStartIdx}
      />
    ) : (
      <ExperimentComplete />
    );
  };

  return (
    <div>
      <h1>This is the Experiment page: {id}</h1>
      <div>{renderExperimentContent()}</div>
      <div>
        progress bar: {startIdx}/{pairs.length}
      </div>
    </div>
  );
};
