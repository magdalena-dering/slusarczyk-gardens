import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Divider, IconButton, Stack, TextField, Typography, useTheme } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useStyles } from './styles';
import { IForm } from './form.model';
import { icons } from '../../types';
import SvgIcon from '../svg';

const Form: React.FC<IForm> = props => {

    const classes = useStyles();
    const { handleSubmit, control } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const theme = useTheme();

    return (
        props.displayForm ? (
            <>
                <div>
                    <IconButton
                        className={classes.buttonClose}
                        onClick={props.onClose}>
                        <SvgIcon icon={<icons.close />} color={theme.palette.primary.main}
                        />
                    </IconButton>
                    <Typography variant="h5" fontWeight="bold" color="primary" textAlign="center" sx={{
                        py: theme.spacing(4)
                    }} >Napisz do nas</Typography>
                </div>
                <Divider variant="middle" />
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Imię"
                                variant="outlined"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                sx={{ margin: theme.spacing(2) }}
                            />
                        )}
                        rules={{ required: 'Imię jest wymagane.' }}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Nazwisko"
                                variant="outlined"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                sx={{ margin: theme.spacing(2) }}
                            />
                        )}
                        rules={{ required: 'Nazwisko jest wymagane.' }}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Email"
                                variant="outlined"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="email"
                                sx={{ margin: theme.spacing(2) }}
                            />
                        )}
                        rules={{ required: 'E-mail jest wymagany.' }}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Numer telefonu"
                                variant="outlined"
                                color="primary"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="number"
                                sx={{ margin: theme.spacing(2) }}
                            />
                        )}
                        rules={{ required: 'Numer telefonu jest wymagany.' }}
                    />
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Wiadomość"
                                variant="outlined"
                                multiline
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                type="text"
                                sx={{
                                    margin: theme.spacing(3), '& .MuiInputBase-root': {
                                        height: '150px',
                                    }
                                }}
                            />
                        )}
                        rules={{ required: 'Wiadomość jest wymagana.' }}
                    />
                    <Stack direction="row" justifyContent="flex-start">
                        <LoadingButton type="submit" variant="contained" color="primary" size="large" sx={{ fontWeight: 'bold' }}>
                            Wyślij
                        </LoadingButton>
                    </Stack>
                </form>
            </>
        ) : null
    )
};

export default Form;