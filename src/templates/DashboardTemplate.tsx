import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Fullscreen from "../components/Fullscreen";
import { RootState } from "../storage";
import { App, add } from "../storage/App.slice";
import style from "../styles/DashboardTemplate.module.css";

const DashboardTemplate: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [apps, setApps] = useState<App[]>([]);

  useEffect(() => {
    if (!auth.token) {
      navigate("/");
      return;
    }

    fetch("https://violet.takasaki.dev/apps", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    }).then(async (result) => {
      if (!result.ok) {
        navigate("/");
        return;
      }

      const json: App[] = await result.json();

      dispatch(add(json));
      setApps(json);
    });
  }, [auth.token, navigate, dispatch]);

  if (!auth.token) {
    return null;
  }

  return (
    <Fullscreen>
      <div className={style.container}>
        <div className={style.sidebar}>
          <div className={style.top}>
            <h1 className={style.title}>Violet React</h1>
            <hr className={style.separator}></hr>
            <div className={style.apps}>
              {apps?.map((app) => (
                <span key={app.id} className={style.app}>
                  {app.name}
                </span>
              ))}
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.logout}>
              <button className={style.button} type="button">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className={style.page}>
          <Outlet />
        </div>
      </div>
    </Fullscreen>
  );
};

export default DashboardTemplate;
