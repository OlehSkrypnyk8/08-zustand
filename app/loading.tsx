import css from "./loading.module.css";

function Loading() {
  return (
    <div className={css.wrapper}>
      <div className={css.spinner} />
      <p className={css.text}>Loading notes...</p>
    </div>
  );
}

export default Loading;
