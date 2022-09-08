import { useNavigate } from 'react-router-dom';

export const ExperimentCard = ({ experiment }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/experiment/${experiment.id}`, { state: experiment });
  };

  return (
    <div onClick={handleClick}>
      <h3>{experiment.title}</h3>
      <h3>{experiment.totalQuestions}</h3>
    </div>
  );
};
