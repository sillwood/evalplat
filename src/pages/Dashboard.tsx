import { ExperimentCard } from '../components/ExperimentCard';
import { supabase } from '../services/supabaseClient';
import { Experiment } from '../types';
import { useState, useEffect } from 'react';
import { PageButtonFooter } from '../components/PageButtonFooter';

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

    const handleClick = (valence: number) => {
        console.log('valence ', valence);
    };

    const renderExperiments = (experiments: Experiment[]) => {
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
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-auto rounded-lg border-4 border-dashed border-gray-200">
                            <ul>{renderExperiments(experiments)}</ul>
                        </div>
                    </div>

                    <PageButtonFooter handleClick={handleClick} />
                </div>
            </main>
        </div>
    );
};
