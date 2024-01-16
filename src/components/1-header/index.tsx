import { HTMLAttributes } from 'react';
import { classNames } from '@/utils/classnames';
import { Link } from 'react-router-dom';

export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("", className)} {...rest}>
            Header
            <Link to="/about">About</Link>
            <Link to="/books">Books</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}
