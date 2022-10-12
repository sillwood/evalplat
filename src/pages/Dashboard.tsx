import { ExperimentCard } from '../components/ExperimentCard';
import { supabase } from '../services/supabaseClient';
import { Experiment } from '../types';
import { useState, useEffect } from 'react';

export const Dashboard = () => {
  const [experiments, setExperiments] = useState<Experiment[]>([]);

  useEffect(() => {
    const getExperiments = async () => {
      const { data: experiments, error } = await supabase
        .from('experiment')
        .select(`*, pair ( id )`);

      if (error) {
        console.error(error);
      } else {
        setExperiments(experiments);
      }
    };
    getExperiments();
  }, []);

  const renderExperiments = (experiments: Experiment[]) => {
    if (experiments.length === 0) {
      return <h3>No experiments!</h3>;
    }
    return experiments.map((experiment: Experiment) => (
      <ExperimentCard key={experiment.id} experiment={experiment} />
    ));
  };

  return (
    <div>
      <h1>This is the Dashboard page</h1>
      <ul>{renderExperiments(experiments)}</ul>
    </div>
  );
};
