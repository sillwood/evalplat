import { ReactNode, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ExperimentComplete } from '../components/ExperimentComplete';
import { Pair } from '../components/Pair';
import { supabase } from '../services/supabaseClient';
import { useClient } from '../hooks/useClient';
import { PairType } from '../types';

interface LocationState {
    completedPairs: number;
}

export const Experiment = () => {
    // get exp id and corresponding pairs
    const { id } = useParams();
    const { data, error, isLoading } = useClient(
        supabase
            .from('pair')
            .select(`*, experiment ( prompt )`)
            .match({ experiment_id: id })
    );
    // TODO: error handling

    const pairs: PairType[] = data || [];

    // get completed pair from location
    const location = useLocation();
    const { completedPairs } = location.state as LocationState;
    const [startIdx, setStartIdx] = useState(completedPairs);

    const renderExperimentContent = (): ReactNode => {
        return startIdx < pairs.length ? (
            <Pair idx={startIdx} pairs={pairs} setStartIdx={setStartIdx} />
        ) : (
            <ExperimentComplete />
        );
    };

    return (
        <div className="mx-auto min-h-full max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="rounded-lg border-4 border-dashed border-gray-200">
                {!isLoading && renderExperimentContent()}
            </div>
        </div>
    );
};
