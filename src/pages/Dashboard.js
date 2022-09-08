import { useAuth } from '../hooks/useAuth';
import { ExperimentCard } from '../components/ExperimentCard';

export const Dashboard = () => {
  const { token } = useAuth();

  const mockExp = [
    { title: 'test 1', totalQuestions: 10 },
    { title: 'yoyo', totalQuestions: 12 },
    { title: 'cooool', totalQuestions: 60 },
  ];

  const renderExperiments = (experiments) => {
    return experiments.map((experiment, idx) => (
      <ExperimentCard
        key={idx}
        title={experiment.title}
        totalQuestions={experiment.totalQuestions}
      />
    ));
  };

  return (
    <div>
      <h1>This is the Dashboard page</h1>
      <h3>token: {token}</h3>
      <ul>{renderExperiments(mockExp)}</ul>
    </div>
  );
};
