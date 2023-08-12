import { classNames } from "shared/lib/classNames/classNames";
import cls from './anotherDocs.module.scss'

interface anotherDocsProps {
  className?: string
}

export const anotherDocs = ({ className }: anotherDocsProps) => {
  return (
    <div className={classNames(cls.anotherDocs, {}, [className])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
    </div>
  );
};
