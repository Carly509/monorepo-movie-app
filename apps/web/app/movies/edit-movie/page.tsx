'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../../../utils/auth-context';
import { trpc } from '../../../utils/trpc';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import styles from './edit.module.css';

export default function EditMovie() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { userId } = useAuth();

    // Access query parameters from searchParams
    const movieIdString = searchParams.get('movie_id');
    const initialTitle = searchParams.get('title');
    const initialYear = searchParams.get('year');

    const movieId = movieIdString ? parseInt(movieIdString, 10) : undefined;


    const [title, setTitle] = useState<string>(typeof initialTitle === 'string' ? initialTitle : '');
    const [publishingYear, setPublishingYear] = useState<string>(typeof initialYear === 'string' ? initialYear : '');
    const [image, setImage] = useState<string | null>(null);

    // const { data: movie, isLoading } = trpc.movie.getMovie.useQuery({ id: movieId });

    useEffect(() => {
        // Set the title and year from the query parameters when they are available
        if (typeof initialTitle === 'string') {
            setTitle(initialTitle);
        }
        if (typeof initialYear === 'string') {
            setPublishingYear(initialYear);
        }
    }, [initialTitle, initialYear]);

    const editMovieMutation = trpc.editMovie.useMutation({
        onSuccess: () => {
          router.push('/movies/movies-list');
        },
      });

      const handleImageUpload = (event:any) => {
        const file = event.target.files[0];
        if (file) {
          setImage(URL.createObjectURL(file));
        }
      };




    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        editMovieMutation.mutate({
            id: movieId,
            userId,
            title,
            publishingYear: parseInt(publishingYear, 10),
            image, // Include image if needed
        });
      };


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.imageUploadContainer}>
                    <h1 className={styles.title}>Edit Movie</h1>
                    <div className={styles.imageUpload}>
                        {image ? (
                            <Image src={image} alt="Uploaded movie poster" width={200} height={300} />
                        ) : (
                            <div className={styles.uploadPlaceholder}>
                                <FileDownloadOutlinedIcon />
                                <p>Drop an image here</p>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className={styles.fileInput}
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Title"
                            className={styles.input}
                            required
                        />
                        <input
                            type="number"
                            value={publishingYear}
                            onChange={(e) => setPublishingYear(e.target.value)}
                            placeholder="Publishing year"
                            className={styles.input}
                            style={{ width: '200px' }}
                            required
                        />
                    </div>
                    <div className={styles.buttonGroup}>
                        <button type="button" onClick={() => router.back()} className={styles.cancelButton}>
                            Cancel
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
