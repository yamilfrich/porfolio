/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { navigate } from "gatsby";
import React, { FormEvent } from "react";
import Layout from "../components/layout/layout";
import { FaSignInAlt } from "react-icons/fa";
import LoginWelcome from "../components/login/welcome";
import CustomSnackbar from "../components/commons/custom-snackbar";
import SEO from "../components/seo";
import CustomAniLink from "../components/commons/custom-anilink";

interface IUser {
  email: string;
  password: string;
}

interface IState extends IUser {
  errors: string[];
}

class Login extends React.Component<{ location: any }, IState> {
  constructor(props: { location: any }) {
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
    const res = await fetch(`${process.env.PORTFOLIO_API_URL}auth/login`, {
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
    const { location } = this.props;
    const hasMessage = location && location.state && location.state.message;
    return (
      <Layout>
        <SEO title="Login" />
        {hasMessage && (
          <CustomSnackbar
            message={location.state.message}
            type={location.state.type}
          />
        )}
        <div className="section text-center">
          <div css={loginContainerStyles}>
            <LoginWelcome />
            <div css={loginStyles}>
              <h2>
                <FaSignInAlt /> Login
              </h2>
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
                  <small>
                    <CustomAniLink to="/">Forgot password?</CustomAniLink>
                  </small>
                </div>
                <Button
                  type="submit"
                  fullWidth={true}
                  color="secondary"
                  variant="contained"
                >
                  Login
                </Button>
              </form>
              <div>
                Not registered?{` `}
                <CustomAniLink to="/register">Create an account</CustomAniLink>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const loginContainerStyles = css`
  display: flex;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`;

const loginStyles = css`
  background: #fff;
  margin: 0 auto;
  padding: 30px;
  width: 360px;
  flex-shrink: 0;
  & form > div {
    margin-bottom: 20px;
    small {
      display: block;
      text-align: right;
      margin-top: 5px;
    }
  }
`;

const errorsStyles = css`
  height: 42px;
  & > div {
    background: pink;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

export default Login;
