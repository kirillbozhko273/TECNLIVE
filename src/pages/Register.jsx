import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {

    if (!name || !email || !password) {
      alert("Заполните все поля");
      return;
    }

    const user = {
      name,
      email,
      password,
      role: "user",
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Регистрация успешно завершена");

    navigate("/catalog");
  };


  return (
    <>
      <Helmet>
        <title>
          Регистрация — TECHLIVE
        </title>

        <meta
          name="description"
          content="Создание аккаунта TECHLIVE"
        />
      </Helmet>

      <section className="auth-page">

        <div className="page-animation"></div>

        <div className="auth-container">

          <div className="auth-left">

            <h1>
              Создайте <br />
              аккаунт
            </h1>

            <p>
              Зарегистрируйтесь в TECHLIVE, чтобы получить доступ к
              возможностям интернет-магазина и будущим функциям личного кабинета.
            </p>

          </div>


          <div className="auth-right">

            <h2>
              Регистрация
            </h2>


            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />


            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />


            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />


            <button
              className="auth-btn"
              onClick={handleRegister}
            >
              Зарегистрироваться
            </button>

          </div>

        </div>

      </section>

    </>
  );
}

export default Register;