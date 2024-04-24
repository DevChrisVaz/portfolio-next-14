// import { ReactElement, ReactNode, RefObject } from "react"

enum NavSize {
    small,
    medium,
    large
}

type NavbarProps = {
    className?: string;
    size?: NavSize;
    logo?: ReactNode;
    items: LinkType[];
    searchBar?: boolean;
    isWavy?: boolean;
    // children: ReactElement<NavLinksType>[] | ReactElement<NavLinksType>
}

type NavLinksType = {
    className?: string;
    items: LinkType[];
    ref?: RefObject<HTMLDivElement>;
}

type NavLinkProps = {
    children: ReactNode;
    to: string;
}

type NavbarItemProps = {
    item: LinkType;
}

type LinkType = {
    label: string;
    url?: string;
    dropdown?: LinkType[];
}

type IconActionsProps = {
    
}

type ActionButtonProps = {
    children: ReactNode;
    action: () => void;
}