import LoginForm from '@/forms/loginform'


function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">

                {/* Hero */}
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold">
                        Plan. Track. Achieve.
                    </h1>

                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Personalized nutrition and workout plans, meaningful goals,
                        and progress tracking. All in one place. All the time.
                    </p>
                </div>

                {/* Login */}
                <LoginForm />

            </div>
        </div>
    )
}

export default LoginPage;