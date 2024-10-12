import { ReactNode } from "react";
import { Grid2, Typography } from "@mui/material";

interface FormContainerData {
    customClassName?: string;
    sizeForm?: number;
    style?: React.CSSProperties;
    title?: string;
    titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    titleStyle?: React.CSSProperties;
};

type FormContainerProps<T> = {
    data: T & FormContainerData;
    render: ReactNode;
};

const FormContainer = <T extends FormContainerData>( { data, render }: FormContainerProps<T> ) => {

    return (
        <Grid2
            alignItems='center'
            container
            justifyContent='center'
            spacing={ 2 }
            sx={{ mt: 2 }}
        >
            <Grid2
                className={ data.customClassName }
                size={ data.sizeForm }
                sx={ data.style }
            >
                {
                    ( data.title ) && (
                        <Typography
                            variant={ data.titleVariant }
                            sx={ data.titleStyle }
                        >
                            { data.title }
                        </Typography>
                    )
                }

                { render }
            </Grid2>
        </Grid2>
    )
}

export default FormContainer;