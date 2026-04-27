import { useState } from 'react'

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message sent from ${form.name}`)
  }

  return (
    <section className="page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Message subject" required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default ContactPage
