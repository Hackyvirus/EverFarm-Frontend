export default function Dashboard() {
    return (
      <div>
        <header>
          <h1>Dashboard</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/expenses">Expense Tracking</Link>
            <Link href="/weather">Weather</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/education">Education</Link>
            <Link href="/logout">Logout</Link>
          </nav>
        </header>
        <main>
          <section>
            <h2>Your Dashboard</h2>
            <p>Welcome back, [User Name]!</p>
            <p>Here is an overview of your recent activities:</p>
            {/* Include summaries of expenses, weather updates, and more */}
          </section>
        </main>
      </div>
    );
  }
  