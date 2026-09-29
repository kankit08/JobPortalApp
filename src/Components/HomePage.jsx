import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
        <section className="bg-slate-50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Your career and hiring platform
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Find your next opportunity. Hire your next teammate.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Explore jobs that fit your skills, track your applications, and
          connect with the people building great teams.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/signup?role=candidate"
            className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-700">
            Find a job
          </Link>

          <Link
            to="/signup?role=employer"
            className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition hover:border-indigo-300 hover:text-indigo-700">
            Post a job
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomePage