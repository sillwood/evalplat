import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useFetch } from '../hooks/useFetch';
import { Button } from '../components/Button';

export const Experiment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // todo: fetch test data with id

  // const experimentPairs: Pair[] = useFetch("url.pairs.com/id");

  // get startIdx from last answered question, otherwise default to 0
  const startIdx = 0;

  const getButtonText = () => (startIdx > 0 ? 'Continue' : 'Start');

  const handleStart = () => {
    navigate(`/experiment/${id}/${startIdx}`);
  };

  return (
    <div>
      <h1>This is the Experiment page</h1>
      <h3>{id}</h3>
      <p>Instructions for experiment type goes here</p>
      <Button text={getButtonText()} onClick={handleStart} />
    </div>
  );
};
