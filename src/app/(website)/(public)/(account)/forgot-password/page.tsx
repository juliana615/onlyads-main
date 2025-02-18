'use client'

export default function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col items-center h-full max-w-md py-20 mx-auto md:py-32 md:justify-center">
      <h1 className="title">Reset Password</h1>
      <p className="description max-w-64">Enter your registered email</p>
      <div className="w-full mt-12">
        <form onSubmit={handleSubmit} className="form">
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email address" />
            </div>
          </div>
          <div className="mt-4">
            <button type="submit" className="w-full btn btn-primary">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
