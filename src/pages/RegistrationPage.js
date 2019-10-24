import React from 'react'

export default function RegistrationPage() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Registry
      </button>
    </form>
  )
}