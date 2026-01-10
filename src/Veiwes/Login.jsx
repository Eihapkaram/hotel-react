import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "/src/Redux/Slices/authSlice";

function Login() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={submitHandler} style={styles.form}>
        <h2>تسجيل الدخول</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button style={styles.button} disabled={loading} type="submit">
          {loading ? "جاري الدخول..." : "دخول"}
        </button>
      </form>
    </div>
  );
}

export default Login;

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "350px",
    padding: "25px",
    background: "#fff",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
  },
  button: {
    padding: "10px",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};
