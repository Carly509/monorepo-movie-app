// 'use client'

// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography } from '@mui/material';
// import { trpc } from '../../../utils/trpc';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const router = useRouter();

//   const registerMutation = trpc.register.useMutation({
//     onSuccess: (data) => {
//       // Store the token in localStorage or a secure cookie
//       localStorage.setItem('token', data.access_token);
//       router.push('/movies');
//     },
//     onError: (error) => {
//       alert(error.message);
//     },
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     registerMutation.mutate({ email, password, name });
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Register
//       </Typography>
//       <TextField
//         fullWidth
//         label="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         margin="normal"
//         required
//       />
//       <TextField
//         fullWidth
//         label="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         margin="normal"
//         required
//       />
//       <TextField
//         fullWidth
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         margin="normal"
//         required
//       />
//       <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//         Register
//       </Button>
//       <Box sx={{ mt: 2 }}>
//         <Link href="/auth/login">Already have an account? Login</Link>
//       </Box>
//     </Box>
//   );
// }
