import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const ExperimentComplete = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    };

    return (
        <div>
            <h2>Experiment completed. Thank you for your feedback.</h2>
            <Button text={'Return to Dashboard'} onClick={handleClick} />
        </div>
    );
};
