import { useNavigate } from 'react-router-dom';
import { ExperimentMeta } from '../types';

interface Props {
  experiment: ExperimentMeta;
}

export const ExperimentCard = ({ experiment }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/experiment/${experiment.id}`);
  };

  return (
    <div onClick={handleClick}>
      <h3>{experiment.title}</h3>
      <p>{experiment.prompt}</p>
      <p>Length: {experiment.pair.length}</p>
    </div>
  );
};
