import { ReactNode } from 'react';
import styles from './ProjectPageWrapper.module.css'
import NavArrow from '../components/NavArrow/NavArrow'

export default function ProjectPageWrapper({children}: {children: ReactNode}) {
  return (
    <div>
      <div className={styles['page-container']}>
        <div className={styles['nav-arrow']}>
          <NavArrow direction='back' to='/dev' />
        </div>
        {children}
      </div>
    </div>
  )
}
