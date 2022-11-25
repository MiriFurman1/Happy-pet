
export function Signup() {
    return (
        <div className="signupPage">
            <h1>sign up</h1>
            <form>
            <label htmlFor="name" type={"name"}>Name</label>
                <input name="name"></input>
                <label htmlFor="email" >Email</label>
                <input name="email" type={"email"}></input>
                <label htmlFor="password" >Password</label>
                <input name="password" type={"password"}></input>
                <input type={"submit"} ></input>
            </form>
        </div>
    )
}