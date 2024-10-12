import { ReactNode } from "react";

import { Grid2 } from "@mui/material";

interface ButtonsData {
    alignItemsData?: string
    children: ReactNode;
    sizeGrid?: { xs?: number; sm?: number; md?: number; lg?: number };
    spacingData?: number,
    style?: object,
};

const GridFormButtons = ({
    alignItemsData,
    children,
    sizeGrid,
    spacingData,
    style,
}: ButtonsData ) => {

    return (
        <Grid2
            alignItems={ alignItemsData }
            container
            spacing={ spacingData }
            sx={ style }
        >
            {
                Array.isArray( children )
                    ? (
                        children.map(( child, key ) => (
                            <Grid2
                                key={ key }
                                size={ sizeGrid }
                            >
                                { child }
                            </Grid2>
                        ))
                    )
                    :  ( <Grid2 size={ sizeGrid }> { children } </Grid2> )
            }
        </Grid2>
    )
}

export default GridFormButtons;