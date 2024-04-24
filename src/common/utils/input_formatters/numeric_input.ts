export const handleNumericInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
        !(
            event.key === 'Backspace' ||
            (event.key >= '0' && event.key <= '9')
        )
    ) {
        event.preventDefault();
    }
};