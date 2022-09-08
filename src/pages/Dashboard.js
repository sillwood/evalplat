import { ExperimentCard } from '../components/ExperimentCard';

export const Dashboard = () => {
  const mockExp = [
    { title: 'test 1', totalQuestions: 10 },
    { title: 'yoyo', totalQuestions: 12 },
    { title: 'cooool', totalQuestions: 60 },
  ];

  const renderExperiments = (experiments) => {
    return experiments.map((experiment) => (
      <ExperimentCard experiment={experiment} />
    ));
  };

  return (
    <div>
      <h1>This is the Dashboard page</h1>
      <ul>{renderExperiments(mockExp)}</ul>
    </div>
  );
};
