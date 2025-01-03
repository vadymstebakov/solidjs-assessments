import { query, redirect } from '@solidjs/router';
import { QueryClient } from '@tanstack/solid-query';
import { userMeRetrieve } from '@/api/users';

export const getMeData = query(async () => {
    const queryClient = new QueryClient();
    let data;

    try {
        data = await queryClient.ensureQueryData({ queryKey: ['me'], queryFn: userMeRetrieve });
    } catch (error) {
        console.log(error);
        throw redirect('/login');
    }

    if (!data) {
        throw redirect('/login');
    }

    throw redirect('/assessments');
}, 'me');
