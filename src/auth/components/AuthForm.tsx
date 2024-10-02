import { TextField } from '@mui/material';
import { useField } from 'formik';

interface Props {
    component?: string,
    label?: string,
    name: string,
    placeholder?: string,
    type: string,
};

export const AuthForm = ( { label, ...props } : Props ) => {
    const [ field, meta ] = useField( props );

    return (
        <div
            style={{
                marginBottom: '1.5%',
            }}
        >
            <TextField
                { ...field }
                error={ meta.touched && Boolean(meta.error) }
                fullWidth
                helperText={ ( meta.touched && meta.error ) ? meta.error : '' }
                placeholder={ props.placeholder }
                type={ props.type }
                variant="filled"
            />
        </div>
    )
}
