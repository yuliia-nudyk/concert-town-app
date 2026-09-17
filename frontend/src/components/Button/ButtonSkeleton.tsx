//#region imports
import cn from 'classNames';
import baseStyles from './base.module.scss';
import { SkeletonItem } from "../SkeletonItem";
import type { FC } from 'react';
//#endregion

interface Props {
  fitContent?: boolean;
}

export const ButtonSkeleton:FC<Props> = ({ fitContent }) => (
  <SkeletonItem additionalClass={cn(baseStyles.button, {
    [baseStyles.fitContent]: fitContent,
  })} />
);
