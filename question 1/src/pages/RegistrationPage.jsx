import { useState } from 'react'

function RegistrationPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', plan: 'Basic' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Registered: ${form.name}`)
  }

  return (
    <section className="page">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />
        </div>
        <div className="form-group">
          <label>Plan</label>
          <select name="plan" value={form.plan} onChange={handleChange}>
            <option>Basic</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  )
}

export default RegistrationPage
