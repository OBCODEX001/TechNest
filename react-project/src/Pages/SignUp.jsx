import { Link } from "react-router-dom"
import Header from "../components/Header"
import "./Auth.css"

export default function SignUp() {
  return (
    <>
      <Header />
      <main className="authPage">
        <section className="authShell">
          <div className="authIntro">
            <div>
              <p className="authEyebrow">Join TechNest</p>
              <h1>Make room for better technology.</h1>
              <p>Create your account and discover a smarter way to shop for the gear you use every day.</p>
            </div>
            <div className="authAccent" />
          </div>
          <div className="authFormPanel">
            <form className="authForm" onSubmit={(event) => event.preventDefault()}>
              <h2>Create account</h2>
              <p className="authSubtext">It only takes a minute to get started.</p>
              <label className="authField">
                Full name
                <input type="text" placeholder="Your full name" required />
              </label>
              <label className="authField">
                Email address
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label className="authField">
                Password
                <input type="password" placeholder="At least 8 characters" minLength="8" required />
              </label>
              <div className="authOptions">
                <label><input type="checkbox" required /> I agree to the terms</label>
              </div>
              <button className="authSubmit" type="submit">Create my account</button>
              <p className="authSwitch">Already have an account? <Link to="/login">Log in</Link></p>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}