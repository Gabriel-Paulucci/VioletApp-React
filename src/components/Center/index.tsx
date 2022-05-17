import style from "./Center.module.css";

export interface CenterProps {
  children: React.ReactNode;
}

const Center: React.FC<CenterProps> = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default Center;
