'use client'

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { trpc } from '../../../utils/trpc';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../../../utils/auth-context';
import styles from './login.module.css';

 export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const mutation = trpc.login.useMutation({
    onSuccess: (data) => {
      // Handle successful login
      login(data.access_token);
      console.log(data);
      router.push('/movies');
    },
    onError: (error) => {
      // Handle error
      alert(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call the mutate function from the mutation object
    await mutation.mutateAsync({ email, password });
  };

  return (

      <div className={styles.formContainer}>
        <Typography variant="h4" component="h1" className={styles.title}>
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            className={styles.input}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            className={styles.input}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={styles.checkbox}
              />
            }
            label="Remember me"
            className={styles.rememberMe}
          />
          <Button type="submit" variant="contained" fullWidth className={styles.button}>
            Login
          </Button>
          {mutation.error && <p>{mutation.error.message}</p>}
        </form>
        <Box className={styles.linkContainer}>
          <Link href="/auth/register" className={styles.link}>
            Don't have an account? Register
          </Link>
        </Box>
      </div>
  );
}
