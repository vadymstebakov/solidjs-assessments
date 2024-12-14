import { type Component } from 'solid-js';
import { A, type RouteSectionProps } from '@solidjs/router';

const NotFoundRoute: Component<RouteSectionProps> = () => {
    return (
        <section>
            <h1>Page not found</h1>
            <A href="/">Go home</A>
        </section>
    );
};

export default NotFoundRoute;
