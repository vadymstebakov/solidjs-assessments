import { type ValidComponent } from 'solid-js';
import { type PolymorphicProps } from '@kobalte/core';
import {
    NavigationMenu as BaseNavigationMenu,
    type NavigationMenuTriggerProps,
    type NavigationMenuRootProps,
} from '@kobalte/core/navigation-menu';
import clsx from 'clsx';
import s from './style.module.css';

export function NavigationMenu<T extends ValidComponent = 'ul'>(
    props: PolymorphicProps<T, NavigationMenuRootProps<T>>
) {
    return <BaseNavigationMenu {...props} class={clsx(s.wrap, props.class)} />;
}

export function NavigationMenuTrigger<T extends ValidComponent = 'button'>(
    props: PolymorphicProps<T, NavigationMenuTriggerProps<T>>
) {
    return <BaseNavigationMenu.Trigger {...props} class={clsx(s.trigger, props.class)} />;
}
