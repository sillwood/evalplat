import { PairType } from '../types';
import { Button } from './Button';
import { supabase } from '../services/supabaseClient';
import { getSession } from '../utils/getSession';
import { useEffect, useState } from 'react';
import { AudioPlayer } from './AudioPlayer';

interface Props {
    idx: number;
    pairs: PairType[];
    setStartIdx: (idx: number) => void;
}

type selected = 'media_a' | 'media_b';

export const Pair = ({ idx, pairs, setStartIdx }: Props) => {
    const [mediaALink, setMediaALink] = useState(null);
    const [mediaBLink, setMediaBLink] = useState(null);

    useEffect(() => {
        const fetchMediaUrl = async (mediaType: selected, id: string) => {
            let { data: media, error } = await supabase
                .from('media')
                .select('url')
                .eq('id', id);

            // todo: media === undefined hack for ts error handling
            if (media === undefined || error) {
                console.error(error);
            } else if (mediaType === 'media_a') {
                setMediaALink(media[0].url);
            } else if (mediaType === 'media_b') {
                setMediaBLink(media[0].url);
            } else {
                return;
            }
        };

        fetchMediaUrl('media_a', pairs[idx].media_a);
        fetchMediaUrl('media_b', pairs[idx].media_b);
    }, [idx, pairs]);

    const postResponse = async (
        userId: string,
        selected: selected
    ): Promise<any> => {
        const { data, error } = await supabase
            .from('response')
            .insert([
                {
                    user_id: userId,
                    pair_id: pairs[idx].id,
                    media_id: pairs[idx][selected]
                }
            ])
            .select('*');

        return { data, error };
    };

    const handleSubmit = async (selected: selected): Promise<any> => {
        const session = await getSession();
        const userId = session?.user?.id ?? 'response-user-error';
        const { data, error } = await postResponse(userId, selected);

        if (data !== undefined) {
            setStartIdx(idx + 1);
        } else {
            console.error(error);
        }
    };

    return (
        <div className="m-6 flex h-70v flex-col items-center justify-around">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {pairs[idx].experiment.prompt}
            </h3>
            <div className="flex min-w-full flex-col justify-around md:flex-row">
                <div className="flex flex-col">
                    {mediaALink && (
                        <AudioPlayer label="Clip A" url={mediaALink} />
                    )}
                    <Button
                        modifiers="mt-4"
                        text={'Choice A'}
                        onClick={() => handleSubmit('media_a')}
                    />
                </div>
                <div className="flex flex-col">
                    {mediaBLink && (
                        <AudioPlayer label="Clip B" url={mediaBLink} />
                    )}
                    <Button
                        modifiers="mt-4"
                        text={'Choice B'}
                        onClick={() => handleSubmit('media_b')}
                    />
                </div>
            </div>
            <div>
                Progress: {idx}/{pairs.length}
            </div>
        </div>
    );
};
