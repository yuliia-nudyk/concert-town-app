//#region imports
import { CategoryBadgeSkeleton } from '../../../../components/CategoryBadge';
import { SkeletonItem } from '../../../../components/SkeletonItem';
import baseStyles from './base.module.scss';
import styles from './EventHeaderSkeleton.module.scss';
//#endregion

export const EventHeaderSkeleton = () => (
  <div className={baseStyles.header}>
    <CategoryBadgeSkeleton />

    <SkeletonItem additionalClass={styles.title} />
  </div>
);
