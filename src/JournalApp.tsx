
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import { useCheckoutAuth } from "./hooks/useCheckoutAuth";

export const JournalApp = () => {
    const { authState } = useCheckoutAuth();

    return (
        <AppTheme>
            <AppRouter authState={ authState } />
        </AppTheme>
    )
}
