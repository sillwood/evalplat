import { useParams } from 'react-router-dom';

export const Experiment = ({ experiment }) => {
  const { id } = useParams();
  // todo: fetch test data with id

  return (
    <div>
      <h1>This is the Experiment page</h1>
      <h3>{id}</h3>
    </div>
  );
};
