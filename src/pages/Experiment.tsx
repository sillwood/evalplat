import { useParams } from 'react-router-dom';
import { Pair } from '../components/Pair';
// import { useFetch } from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { PairType } from '../types';

export const Experiment = () => {
  const { id } = useParams();
  // two fetches: one for Experiment: with meta & pairs
  // const experiment: Experiment = useFetch("url.experiment.com/id");
  // const { pairs }: Pair[] = experiment;
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
  // const { completedIdx }: number = useFetch("url.userId.com/experimentId");
  const completedIdx = 0;

  const [startIdx, setStartIdx] = useLocalStorage(id, completedIdx);

  const renderExperimentContent = () => {
    return startIdx < pairs.length ? (
      <div>
        <p>experiment prompt explanation goes here lorem ipsum</p>
        <Pair idx={startIdx} pairs={pairs} setStartIdx={setStartIdx} />
      </div>
    ) : (
      <div>Experiment completed.</div>
    );
  };

  return (
    <div>
      <h1>This is the Experiment page</h1>
      <h3>{id}</h3>
      <div>{renderExperimentContent()}</div>
      <div>
        progress bar: {startIdx}/{pairs.length}
      </div>
    </div>
  );
};
