export function Signin() {
    return (
        <div className="signinPage">
            <h1>Login</h1>
            <form>
                <label htmlFor="email" >Email</label>
                <input name="email" type={"email"}></input>
                <label htmlFor="password" >Password</label>
                <input name="password"type={"password"}></input>
                <input type={"submit"}></input>
            </form>
            <img alt="" src="/animals/alex-nicolopoulos-hxn2HjZHyQE-unsplash.jpg" height="400px"></img>
        </div>
    )
}