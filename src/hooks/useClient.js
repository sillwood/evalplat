import { useEffect, useState } from 'react';

export const useClient = (request) => {
    const initialState = {
        data: null,
        error: null,
        isLoading: true,
    };

    const [payload, setPayload] = useState(initialState);

    useEffect(() => {
        const sendReq = async (req) => {
            const { data, error } = await req;
            setPayload({ data, error, isLoading: false });
        };

        sendReq(request);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return payload;
};
