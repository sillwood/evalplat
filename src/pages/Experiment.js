import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';

export const Experiment = ({ experiment }) => {
  const { id } = useParams();
  // todo: fetch test data with id

  const handleStart = () => {
    console.log('im startin');
  };

  return (
    <div>
      <h1>This is the Experiment page</h1>
      <h3>{id}</h3>
      <p>Instructions for experiment type goes here</p>
      <Button text={'Start'} handleClick={handleStart} />
    </div>
  );
};
