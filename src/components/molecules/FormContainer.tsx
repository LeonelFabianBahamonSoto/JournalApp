import { ReactNode } from "react";
import { Grid2, Typography } from "@mui/material";

interface FormContainerData {
    alignItemsMain?: string,
    children: ReactNode | ReactNode[];
    customClassName?: string;
    sizeForm?: { xs?: number, md?: number, lg?: number }
    spacingMain?: number,
    styleMain?: React.CSSProperties;
    styleSecond?: React.CSSProperties;
    title?: string;
    titleStyle?: React.CSSProperties;
};

const FormContainer = ({
    alignItemsMain,
    children,
    customClassName,
    sizeForm,
    spacingMain,
    styleMain,
    styleSecond,
    title,
    titleStyle,
}: FormContainerData ) => {

    return (
        <Grid2
            alignItems={ alignItemsMain }
            container
            direction='column'
            spacing={ spacingMain }
            justifyContent='center'
            sx={ styleMain }
        >
            <Grid2
                className={ customClassName }
                size={ sizeForm }
                sx={ styleSecond }
            >
                {
                    ( title ) && (
                        <Typography
                            sx={ titleStyle }
                        >
                            { title }
                        </Typography>
                    )
                }

                { children }
            </Grid2>
        </Grid2>
    )
}

export default FormContainer;