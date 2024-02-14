import { ItemTemplate } from '../../templates';
import { ItemTemplateProps } from '../ItemTemplate/ItemTemplate';

import styles from './TitledItemTemplate.module.scss';

interface TitledItemTemplateProps extends ItemTemplateProps {
  title: string;
}

export const TitledItemTemplate: React.FC<TitledItemTemplateProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <ItemTemplate
      className={`${styles.titledItemTemplate} ${className ? className : ''}`}
      {...props}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{children}</div>
    </ItemTemplate>
  );
};
