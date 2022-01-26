import s from "../style.module.css";

const Header = ({ title, descr }) => {
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.container}>
        {title && <h1 className={s.header}>{title}</h1>}
        {descr && <p className={s.paragraph}>{descr}</p>}
      </div>
    </header>
  );
};

export default Header;
