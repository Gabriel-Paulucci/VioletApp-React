import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Center from "../components/Center";
import Fullscreen from "../components/Fullscreen";
import { login } from "../storage/Auth.slice";
import style from "../styles/HomeView.module.css";

const HomeView: React.FC = () => {
  const form = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleFormSubmit(data: FieldValues) {
    const result = await fetch("https://violet.takasaki.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!result.ok) {
      alert("Login failed");
      return;
    }

    const json = await result.json();

    dispatch(login(json.token));

    navigate("/dashboard");
  }

  return (
    <Fullscreen>
      <Center>
        <form
          className={style.form}
          onSubmit={form.handleSubmit(handleFormSubmit)}
        >
          <h1 className={style.title}>Login</h1>
          <input
            className={style.input}
            type="text"
            placeholder="Username"
            {...form.register("username")}
          />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
            {...form.register("password")}
          />
          <div>
            <Link className={style.link} to="/singup">
              Sing Up
            </Link>
            <button className={style.button} type="submit">
              Login
            </button>
          </div>
        </form>
      </Center>
    </Fullscreen>
  );
};

export default HomeView;
