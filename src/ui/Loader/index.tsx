import { type ComponentProps } from 'solid-js';
import clsx from 'clsx';
import s from './style.module.css';

export const Loader = (props: ComponentProps<'div'>) => {
    return (
        <div {...props} class={clsx(s.wrap, props.class)}>
            Loading...
        </div>
    );
};
