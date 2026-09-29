import { Link } from "react-router-dom"
import Header from "../components/Header"
import "./Auth.css"

export default function Login() {
  return (
    <>
      <Header />
      <main className="authPage">
        <section className="authShell">
          <div className="authIntro">
            <div>
              <p className="authEyebrow">Welcome back</p>
              <h1>Your tech world is waiting.</h1>
              <p>Sign in to keep your wishlist, orders, and favourite gadgets close at hand.</p>
            </div>
            <div className="authAccent" />
          </div>
          <div className="authFormPanel">
            <form className="authForm" onSubmit={(event) => event.preventDefault()}>
              <h2>Log in</h2>
              <p className="authSubtext">Enter your details to continue shopping.</p>
              <label className="authField">
                Email address
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label className="authField">
                Password
                <input type="password" placeholder="Enter your password" required />
              </label>
              <div className="authOptions">
                <label><input type="checkbox" /> Remember me</label>
                <Link to="/login">Forgot password?</Link>
              </div>
              <button className="authSubmit" type="submit">Log in to TechNest</button>
              <p className="authSwitch">New to TechNest? <Link to="/sign-up">Create an account</Link></p>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}