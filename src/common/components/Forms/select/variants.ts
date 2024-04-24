import { SelectSize } from "./enum";

export const setSize = (size?: SelectSize): string => {
    switch (size) {
        case SelectSize.sm:
            return "py-1 px-3";
        case SelectSize.md:
            return "py-2 px-3";
        case SelectSize.lg:
            return "py-3 px-4";
        case SelectSize.xl:
            return "py-4 px-5";
        case SelectSize.circle:
            return "p-2";
        default:
            return "py-3 px-4";
    }
}

// const setVariant = () => {
//     switch (props.variant) {
//         case ButtonVariant.primary:
//             return "border-tertiary bg-tertiary text-secondary hover:bg-tertiary-700 border-3";
//         case ButtonVariant.primary_alt:
//             return "border-secondary bg-secondary text-primary hover:bg-secondary-700 border-3";
//         case ButtonVariant.secondary:
//             return "border-tertiary text-tertiary border-2";
//         default:
//             return "border-tertiary bg-tertiary text-secondary hover:bg-tertiary-700 border-3";
//     }
// }