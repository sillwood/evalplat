import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const ExperimentComplete = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    };

    return (
        <>
            <div>Experiment completed. Thank you for your feedback.</div>
            <Button text={'Return to Dashboard'} onClick={handleClick} />
        </>
    );
};
