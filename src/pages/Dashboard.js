import { useAuth } from '../hooks/useAuth';
import { ExperimentCard } from '../components/ExperimentCard';

export const Dashboard = () => {
  const { token } = useAuth();

  const mockExp = [
    { title: 'test 1', totalQuestions: 10, id: 'test45678932' },
    { title: 'yoyo', totalQuestions: 12, id: 'yoyo923084209383' },
    { title: 'cooool test', totalQuestions: 60, id: 'cool23808903' },
  ];

  const renderExperiments = (experiments) => {
    return experiments.map((experiment) => (
      <ExperimentCard key={experiment.id} experiment={experiment} />
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
