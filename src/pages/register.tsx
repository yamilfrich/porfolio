/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { navigate } from "gatsby";
import React, { FormEvent } from "react";
import Layout from "../components/layout/layout";
import CustomAniLink from "../components/commons/custom-anilink";

interface IUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IState extends IUser {
  errors: string[];
}

class Register extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: ``,
      email: ``,
      password: ``,
      confirmPassword: ``,
      errors: []
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case `name`:
        this.setState({ name: value });
        break;
      case `email`:
        this.setState({ email: value });
        break;
      case `password`:
        this.setState({ password: value });
        break;
      case `confirmPassword`:
        this.setState({ confirmPassword: value });
        break;
    }
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    this.setState({ errors: [] });

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.createUser(data);
  };

  createUser = async (data: IUser) => {
    const res = await fetch(
      `${process.env.GATSBY_PORTFOLIO_API_URL}auth/register`,
      {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        method: "post"
      }
    );

    const resJson = await res.json();

    if (res.ok) {
      navigate("/login", {
        state: {
          message: "Account created successfully",
          type: "success"
        }
      });
    } else if (res.status === 400) {
      this.setState({ errors: resJson.errors });
    } else {
      this.setState({ errors: ["Unexpected error occurred."] });
    }
  };

  render() {
    return (
      <Layout>
        <div className="section text-center">
          <div css={registerStyles}>
            <h2>Register</h2>
            <div css={errorsStyles}>
              {this.state.errors.map((err, i) => (
                <div key={i}>{err}</div>
              ))}
            </div>
            <form onSubmit={this.handleSubmit} action="/">
              <div>
                <TextField
                  name="name"
                  value={this.state.name}
                  label="Full Name"
                  onChange={this.handleChange}
                  fullWidth={true}
                />
              </div>
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
              <div>
                <TextField
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  label="Confirm Password"
                  onChange={this.handleChange}
                  type="password"
                  fullWidth={true}
                />
              </div>
              <Button
                type="submit"
                fullWidth={true}
                color="secondary"
                variant="contained"
              >
                Register
              </Button>
            </form>
            <div>
              Already have an account?{` `}
              <CustomAniLink to="/login">Login instead</CustomAniLink>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const registerStyles = css`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin: 0 auto;
  padding: 20px;
  width: 360px;
  & form > div {
    margin-bottom: 20px;
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

export default Register;
