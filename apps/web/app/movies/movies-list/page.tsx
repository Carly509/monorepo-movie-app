'use client';

import { trpc } from '../../../utils/trpc';
import { useAuth } from '../../../utils/auth-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import styles from './movies.module.css';

export default function Movies() {
  const { logout, userId } = useAuth();
  const { data: movies, isLoading } = trpc.getMovies.useQuery({ userId });
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  if (isLoading) return <div className={styles.loading}>Loading...</div>;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies?.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil((movies?.length || 0) / moviesPerPage);

  return (
    <div className={styles.container}>

      {movies?.length === 0 ? (
        <div className={styles.noMovies}>
          <h1>Your movie list is empty</h1>
          <button
            className={styles.addNewMovieButton}
            onClick={() => router.push('/create-movie')}
          >
            Add A New Movie
          </button>
        </div>
      ) : (
        <div className={styles.movieContainer}>
          <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <h1 className={styles.navbarTitle}>My movies</h1>
          <button
            className={styles.addMovieButton}
            onClick={() => router.push('/movies/add-movie')}
          >
            <AddCircleOutlineOutlinedIcon />
          </button>
        </div>
        <div className={styles.navbarRight}>
          <button className={styles.logoutButton} onClick={() => logout()}>
            Logout &nbsp; <LogoutOutlinedIcon/>
          </button>
        </div>
      </nav>
          <div className={styles.movieGrid}>
            {currentMovies?.map((movie) => (
              <div
                key={movie.id}
                className={styles.movieCard}
                onClick={() => router.push(`/movies/edit-movie?movie_id=${movie.id}&title=${encodeURIComponent(movie.title)}&year=${movie.publishingYear}&image=${movie.imageUrl}`)}
              >
                <div className={styles.moviePosterContainer}>
                  <Image
                    src={movie.imageUrl || '/placeholder.jpg'}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    className={styles.moviePoster}
                  />
                </div>
                <div className={styles.movieInfo}>
                  <p className={styles.movieTitle}>{movie.title}</p>
                  <p className={styles.movieYear}>{movie.publishingYear}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              Prev
            </button>
            <div className={styles.pageNumbers}>
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => setCurrentPage(number + 1)}
                  className={`${styles.pageNumber} ${currentPage === number + 1 ? styles.activePage : ''}`}
                >
                  {number + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
