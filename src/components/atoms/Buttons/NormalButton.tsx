import { Button } from '@mui/material';

interface ButtonData {
    title: 'string',
};

type ButtonProps<T> = {
    data: T & ButtonData;
};

export const NormalButton = <T extends ButtonData>( { data }: ButtonProps<T> ) => {

    const { title } = data;

    return (
        <Button
            endIcon={<></>}
            startIcon={<></>}
            variant="text"
        >
            { title }
        </Button>
    )
}
