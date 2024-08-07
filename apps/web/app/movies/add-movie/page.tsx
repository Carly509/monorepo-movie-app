'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { trpc } from '../../../utils/trpc';
import { useAuth } from '../../../utils/auth-context';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import styles from './add.module.css';

export default function CreateMovie() {
  const [title, setTitle] = useState('');
  const [publishingYear, setPublishingYear] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();
  const { userId } = useAuth();

  const addMovieMutation = trpc.addMovie.useMutation({
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

  const handleSubmit = (event:any) => {
    event.preventDefault();
    addMovieMutation.mutate({
      userId,
      title,
      publishingYear: parseInt(publishingYear, 10),
      imageUrl: image,
    });
  };

  return (
    <div className={styles.container}>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.imageUploadContainer}>
          <h1 className={styles.title}>Create a new movie</h1>
          <div className={styles.imageUpload}>
            {image ? (
              <Image src={image} alt="Uploaded movie poster" width={200} height={300} />
            ) : (
              <div className={styles.uploadPlaceholder}>
                <FileDownloadOutlinedIcon/>
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
            style={{ width: '200px'}}
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
