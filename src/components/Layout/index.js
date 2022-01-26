import s from "../style.module.css";

const Layout = ({ title, descr, urlBg, colorBg }) => {
  const sectionStyle = {};

  if (urlBg) {
    sectionStyle.backgroundImage = `url(${urlBg})`;
  }

  if (colorBg) {
    sectionStyle.backgroundColor = colorBg;
  }

  return (
    <section style={sectionStyle} className={s.root}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {title && <h3 className={s.header}>{title}</h3>}
            <span className={s.separator}></span>
          </div>
          <div className={descr}>
            {descr && <p className={s.paragraph}>{descr}</p>}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
