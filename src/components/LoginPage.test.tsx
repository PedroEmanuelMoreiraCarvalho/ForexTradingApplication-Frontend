import { queryByTestId, render } from "@testing-library/react";
import App from "../App";

describe('waring and loading are not rendering on page load',() => {
    const { container } = render(<App/>);

    test("warning does not render on page load", () => {
        expect(queryByTestId(container, 'warning')).toBeNull()
    });

    test("loading does not render on page load", () => {
        expect(queryByTestId(container, 'loading')).toBeNull()
    });
});

describe('testing api consume',()=>{
    test('signin should not success if user already exists', async() => {
        const new_user = {name: "admin", password: "admin"}
        let new_user_req = await fetch("http://localhost:3800/user",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_user)
        });
        let new_user_res = await new_user_req.json();
        expect(new_user_res.success).toBe(false);
        expect(new_user_res.message).toEqual("user already exists");
    });
    test('login should not success if name is not defined', async() => {
        const new_user = {name: "", password: ""}
        let new_user_req = await fetch("http://localhost:3800/login",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_user)
        });
        let new_user_res = await new_user_req.json();
        expect(new_user_res.success).toBe(false);
        expect(new_user_res.message).toEqual("name field not defined");
    });
    test('login should not success if user does not exists', async() => {
        const new_user = {name: "user_that_not_exists", password: "asdas"}
        let new_user_req = await fetch("http://localhost:3800/login",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_user)
        });
        let new_user_res = await new_user_req.json();
        expect(new_user_res.success).toBe(false);
        expect(new_user_res.message).toEqual("user doesn't exists");
    });
    test('login should not success if password is wrong', async() => {
        const new_user = {name: "exists", password: "wrogn_d"}
        let new_user_req = await fetch("http://localhost:3800/login",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_user)
        });
        let new_user_res = await new_user_req.json();
        expect(new_user_res.success).toBe(false);
        expect(new_user_res.message).toEqual("incorrect password");
    })
    test('login should work', async() => {
        const new_user = {name: "exists", password: "password"}
        let new_user_req = await fetch("http://localhost:3800/login",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(new_user)
        });
        let new_user_res = await new_user_req.json();
        expect(new_user_res.success).toBe(true);
    })
})