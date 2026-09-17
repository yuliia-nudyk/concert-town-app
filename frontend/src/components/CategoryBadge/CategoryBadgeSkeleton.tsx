//#region imports
import cn from 'classNames';
import baseStyles from "./base.module.scss";
import styles from './CategoryBadgeSkeleton.module.scss';
import { SkeletonItem } from '../SkeletonItem';
//#endregion

export const CategoryBadgeSkeleton = () => (
  <SkeletonItem additionalClass={cn(baseStyles.category, styles.category)} />
);
