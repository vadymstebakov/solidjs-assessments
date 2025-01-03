import { type Component } from 'solid-js';
import { A, type RouteSectionProps } from '@solidjs/router';
import { NavigationMenu, NavigationMenuTrigger } from '@/ui/NavigationMenu';
import s from './style.module.css';

const AssessmentsRoute: Component<RouteSectionProps> = (props) => {
    return (
        <section>
            <h1>Assessments</h1>
            <NavigationMenu class={s.nav}>
                <NavigationMenuTrigger as={A} href="units" activeClass={s['active-nav']}>
                    Units
                </NavigationMenuTrigger>
                <NavigationMenuTrigger as={A} href="applications" activeClass={s['active-nav']}>
                    Applications
                </NavigationMenuTrigger>
                <NavigationMenuTrigger as={A} href="vendors" activeClass={s['active-nav']}>
                    Vendors
                </NavigationMenuTrigger>
            </NavigationMenu>
            {props.children}
        </section>
    );
};

export default AssessmentsRoute;
