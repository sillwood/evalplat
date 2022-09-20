import { useNavigate } from 'react-router-dom';
import { Experiment } from '../types';

interface Props {
  experiment: Experiment;
}

export const ExperimentCard = ({ experiment }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/experiment/${experiment.id}`);
  };

  return (
    <div onClick={handleClick}>
      <h3>{experiment.title}</h3>
      <h3>{experiment.totalQuestions}</h3>
    </div>
  );
};
