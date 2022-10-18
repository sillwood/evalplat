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

    const renderCTAButton = () => {
        if (completedPairs === experiment.pair.length) {
            return (
                <div className="inline-flex items-center rounded-lg bg-gray-700 py-2 px-3 text-center text-sm font-medium text-white dark:bg-gray-600 dark:focus:ring-gray-800">
                    Experiment complete
                </div>
            );
        } else {
            return (
                <div
                    onClick={handleClick}
                    className="inline-flex items-center rounded-lg bg-green-700 py-2 px-3 text-center text-sm font-medium text-white hover:cursor-pointer hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Take experiment
                    <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            );
        }
    };

    return (
        <div className=" m-2 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <div onClick={handleClick}>
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {experiment.title}
                </h3>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {experiment.prompt}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Completed: {completedPairs}/{experiment.pair.length}
            </p>
            {renderCTAButton()}
        </div>
    );
};
