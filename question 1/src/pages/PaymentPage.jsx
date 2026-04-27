import { useState } from 'react'

function PaymentPage() {
  const [form, setForm] = useState({ plan: 'Basic', cardNumber: '', expiry: '', cvc: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Payment submitted for ${form.plan} plan`)
  }

  return (
    <section className="page">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Select Plan</label>
          <select name="plan" value={form.plan} onChange={handleChange}>
            <option>Basic</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" required />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input type="text" name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" required />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input type="text" name="cvc" value={form.cvc} onChange={handleChange} placeholder="123" required />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </section>
  )
}

export default PaymentPage
