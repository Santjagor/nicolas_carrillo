import styles from './Navbar.module.css'
import { sections } from '../../Data/Data'
import { useLocation } from 'react-router-dom'

export default function Navbar({ handleBlog, handleSections, navigate }) {
    const location = useLocation()
    return (
        <div className={styles.container}>
            <div className={styles.ncContainer}>
                <img onClick={() => { navigate('/') }} className={styles.logo} src="Logo2.png" alt="logo" loading='lazy' />
            </div>
            <div className={styles.buttonContainer}>
                {sections.map(section => {
                    return (
                        <div
                            id={section.id}
                            key={section.id}
                            onClick={handleSections}
                            className={location.pathname === `/${section.id}` ? styles.button_active : styles.button}
                        >
                            {section.name}
                        </div>
                    )
                })}
                <a onClick={handleBlog} href="#noticias">
                    <div className={styles.button}>Noticias</div>
                </a>
            </div>
        </div>
    )
}