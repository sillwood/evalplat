import { useAuth } from '../hooks/useAuth';
import { ExperimentCard } from '../components/ExperimentCard';
import { supabase } from '../services/supabaseClient';
// import { useEffect, useState } from 'react';
import { useClient } from '../hooks/useClient';

export const Dashboard = () => {
  const { token } = useAuth();
  const {
    data: experiments,
    error,
    isLoading,
  } = useClient(supabase.from('experiment').select());

  // const [experiments, setExperiments] = useState({
  //   data: null,
  //   error: null,
  //   isLoading: true,
  // });

  // useEffect(() => {
  //   const fetchExperiments = async () => {
  //     const { data, error } = await supabase.from('experiment').select();
  //     setExperiments({ data, error, isLoading: false });
  //   };

  //   fetchExperiments();
  // }, []);

  const mockExp = [
    { title: 'test 1', totalPairs: 10, id: 'test45678932' },
    { title: 'yoyo', totalPairs: 12, id: 'yoyo923084209383' },
    { title: 'cooool test', totalPairs: 60, id: 'cool23808903' },
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
      {!isLoading && experiments.map((exp) => <h1>{exp.title}</h1>)}
    </div>
  );
};
