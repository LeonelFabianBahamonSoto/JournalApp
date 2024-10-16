import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
// import NoteView from '../views/NoteView';
import NothingSelectedView from '../views/NothingSelectedView';
import { AddOutlined } from '@mui/icons-material';
import { useEffect } from 'react';
import { getUserAuth } from '../../helper/localStorage';

const JournalPage = () => {

    useEffect(() => {
        console.info( 'isAuth from JournalPAge: ', getUserAuth() );
    }, []);

    return (
        <JournalLayout>

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size='large'
                sx={{
                    bgcolor: 'error.main',
                    color: 'white',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    bottom: 50,
                    right: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>
    )
}

export default JournalPage;