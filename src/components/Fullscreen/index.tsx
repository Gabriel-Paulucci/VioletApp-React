import style from "./Fullscreen.module.css";

export interface FullscreenProps {
  children: React.ReactNode;
}

const Fullscreen: React.FC<FullscreenProps> = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default Fullscreen;
