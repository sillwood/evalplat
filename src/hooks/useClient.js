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

            if (error) {
                console.error(error);
                setPayload({ data: null, error: "There was an unexpected error. Please try again.", isLoading: false });
            } else {
                setPayload({ data, error, isLoading: false });
            }

        };

        sendReq(request);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return payload;
};
