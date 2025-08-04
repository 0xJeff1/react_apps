import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import styles from '../src/home.module.css';
import style from '../src/ThemeToggle.module.css';
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';



const Home = ({ projects }) => {
    const [dark, setDark] = useState(false);
  return (
    <div className={dark ? styles.dark : styles.white}>

    <div className={styles.container}>
          <>
          <button
            className={dark ? style.btm : style.btn}
            onClick={() => setDark(prev => !prev)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <FontAwesomeIcon
              icon={dark ? faSun : faMoon}
              className={style.icon}
              fixedWidth
            />
          </button>
          </>
      
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div className={dark ? styles.projectCarddark : styles.projectCard} key={index}>
            <div className={styles.projectHeader}>
              <div className={styles.projectInfo}>
                <div className={styles.projectTitle}>{project.title}</div>
                <div className={dark ? styles.projectDescriptiondark : styles.projectDescription}>{project.description}</div>
                <div className={styles.projectLinks}>
                <Link 
                  to={project.liveLink}
                  className={`${styles.projectLink} ${styles.viewProjectLink}`}
                >

                    <svg className={styles.linkIcon} fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                    View Project

                  </Link>


                 
                  <a
                    href={project.figmaLink}
                    className={`${styles.projectLink} ${styles.figmaLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.5 0H8.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5h7c3.038 0 5.5-2.462 5.5-5.5S18.538 0 15.5 0z" />
                      <path d="M8.5 11c-3.038 0-5.5 2.462-5.5 5.5S5.462 22 8.5 22s5.5-2.462 5.5-5.5V11H8.5z" />
                      <circle cx="17" cy="16.5" r="5.5" />
                    </svg>
                    View in Figma
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
