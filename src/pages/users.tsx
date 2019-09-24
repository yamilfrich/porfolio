/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import Layout from "../components/layout/layout";

interface IUser {
  name: string;
  email: string;
}

interface IState {
  users: IUser[];
}

class Users extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await fetch("http://localhost:5001/users/", {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include", // "same-origin" ?
      method: "get"
    });

    const users = await res.json();
    if (res.ok) {
      this.setState({ users });
    } else {
      // Do something when we get an error
    }
  };

  render() {
    return (
      <Layout>
        <div className="section text-center">
          <div css={usersStyles}>
            <h2>Users</h2>
            <pre>{JSON.stringify(this.state.users)}</pre>
          </div>
        </div>
      </Layout>
    );
  }
}

const usersStyles = css`
  background: #fff;
`;

export default Users;
