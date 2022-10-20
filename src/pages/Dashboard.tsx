import { ReactNode } from 'react';
import { supabase } from '../services/supabaseClient';
import { useClient } from '../hooks/useClient';
import { Experiment } from '../types';
import { ExperimentCard } from '../components/ExperimentCard';
import { PageButtonFooter } from '../components/PageButtonFooter';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const Dashboard = () => {
    const { data, error, isLoading } = useClient(
        supabase.from('experiment').select(`*, pair ( id )`)
    );

    const experiments: Experiment[] = data || [];

    const handleClick = (valence: number): void => {
        console.log('valence ', valence);
    };

    const renderExperiments = (experiments: Experiment[]): ReactNode => {
        if (experiments.length === 0) {
            return <h3>No experiments!</h3>;
        }
        return experiments.map((experiment: Experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
        ));
    };

    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            {isLoading && <LoadingSpinner />}
            {!isLoading && (
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="rounded-lg border-4 border-dashed border-gray-200">
                                {error && <p>{error}</p>}
                                <ul>{renderExperiments(experiments)}</ul>
                            </div>
                        </div>
                        <PageButtonFooter handleClick={handleClick} />
                    </div>
                </main>
            )}
        </div>
    );
};
