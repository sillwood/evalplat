import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExperimentMeta } from '../types';
import { supabase } from '../services/supabaseClient';
import { getSession } from '../utils/getSession';

interface Props {
  experiment: ExperimentMeta;
}

export const ExperimentCard = ({ experiment }: Props) => {
  const [completedPairs, setCompletedPairs] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompletedPairs = async () => {
      const session = await getSession();
      const userId = session?.user.id || 'response-user-error';

      const { data, error } = await supabase
        .from('response')
        .select(
          ` 
          created_at,
          pair!inner(*)
        `
        )
        .eq('user_id', userId)
        .eq('pair.experiment_id', experiment.id);

      if (error) {
        console.error(error);
      } else {
        setCompletedPairs(data.length);
      }
    };

    fetchCompletedPairs();
  }, [experiment.id]);

  const handleClick = () => {
    navigate(`/experiment/${experiment.id}`, { state: { completedPairs } });
  };

  return (
    <div onClick={handleClick}>
      <h3>{experiment.title}</h3>
      <p>{experiment.prompt}</p>
      <p>
        Completed: {completedPairs}/{experiment.pair.length}
      </p>
    </div>
  );
};
