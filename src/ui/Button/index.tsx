import { type ValidComponent } from 'solid-js';
import { type PolymorphicProps } from '@kobalte/core';
import { Button as BaseButton, type ButtonRootProps } from '@kobalte/core/button';
import clsx from 'clsx';
import s from './style.module.css';

export function Button<T extends ValidComponent = 'button'>(props: PolymorphicProps<T, ButtonRootProps<T>>) {
    return <BaseButton {...props} class={clsx(s.btn, props.class)} />;
}
