import { type Component } from 'solid-js';
import { type RouteSectionProps, useNavigate } from '@solidjs/router';
import { createMutation, QueryClient } from '@tanstack/solid-query';
import { tokenCreate } from '@/api/token';
import { userMeRetrieve } from '@/api/users';
import { Button } from '@/ui/Button';
import s from './style.module.css';

const LoginRoute: Component<RouteSectionProps> = () => {
    const queryClient = new QueryClient();
    const navigate = useNavigate();

    const loginMutation = createMutation(() => {
        return {
            mutationFn: tokenCreate,
            onSuccess(data) {
                localStorage.setItem('apiToken', data.token);
                return queryClient.ensureQueryData({ queryKey: ['me'], queryFn: userMeRetrieve });
            },
        };
    });

    const loginHandler = () => {
        loginMutation.mutate(
            {
                username: import.meta.env.VITE_USERNAME,
                password: import.meta.env.VITE_PASSWORD,
            },
            {
                onSuccess() {
                    navigate('/assessments', { replace: true });
                },
            }
        );
    };

    return (
        <section>
            <h1>Login please!</h1>
            <Button class={s.btn} onClick={loginHandler} disabled={loginMutation.isPending}>
                Login
            </Button>
        </section>
    );
};

export default LoginRoute;
