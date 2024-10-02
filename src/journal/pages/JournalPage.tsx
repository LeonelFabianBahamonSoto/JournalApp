import { MailOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';

const JournalPage = () => {
    return (
        <JournalLayout>
            <Typography variant='h1'>JournalPage</Typography>
            <MailOutline />
        </JournalLayout>
    )
}

export default JournalPage;