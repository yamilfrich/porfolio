/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { navigate } from "gatsby";
import React, { FormEvent } from "react";
import Layout from "../components/layout/layout";

interface IUser {
  email: string;
  password: string;
}

interface IState extends IUser {
  errors: string[];
}

class Login extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: ``,
      password: ``,
      errors: []
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case `email`:
        this.setState({ email: value });
        break;
      case `password`:
        this.setState({ password: value });
        break;
    }
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    this.setState({ errors: [] });

    const data = {
      email: this.state.email,
      password: this.state.password
    };

    this.loginUser(data);
  };

  loginUser = async (data: IUser) => {
    const res = await fetch("http://localhost:5001/auth/login", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      // credentials: "same-origin",
      credentials: "include",
      method: "post",
      body: JSON.stringify(data)
    });

    const resJson = await res.json();

    if (res.ok) {
      navigate("/users");
    } else if (resJson.errors) {
      this.setState({ errors: resJson.errors });
    } else {
      this.setState({ errors: ["Unexpected error occurred."] });
    }
  };

  render() {
    return (
      <Layout>
        <div className="section text-center">
          <div css={loginStyles}>
            <h2>Login</h2>
            <div css={errorsStyles}>
              {this.state.errors.map((err, i) => (
                <div key={i}>{err}</div>
              ))}
            </div>
            <form onSubmit={this.handleSubmit} action="/">
              <div>
                <TextField
                  name="email"
                  value={this.state.email}
                  label="Email"
                  onChange={this.handleChange}
                  fullWidth={true}
                />
              </div>
              <div>
                <TextField
                  name="password"
                  value={this.state.password}
                  label="Password"
                  onChange={this.handleChange}
                  type="password"
                  fullWidth={true}
                />
              </div>
              <Button
                type="submit"
                fullWidth={true}
                color="primary"
                variant="contained"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

const loginStyles = css`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 0 auto;
  padding: 20px;
  width: 400px;
  & form > div {
    margin-bottom: 10px;
  }
`;

const errorsStyles = css`
  & > div {
    background: pink;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

export default Login;
