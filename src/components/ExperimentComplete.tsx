import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const ExperimentComplete = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className=" max-w-80vw relative m-2 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Experiment completed. Thank you for your feedback.
            </h3>
            <Button
                modifiers={'mt-4'}
                text={'Return to Dashboard'}
                onClick={handleClick}
            />
        </div>
    );
};
