import React from "react";
import { useRouteData } from "@remix-run/react";
import { Link, Outlet } from "react-router-dom";

export default function Team() {
  let data = useRouteData();

  return (
    <div>
      <h2>Team</h2>
      <ul>
        {data.map((member) => (
          <li key={member.id}>
            <Link to={member.login}>{member.login}</Link>
          </li>
        ))}
      </ul>
      <hr />
      {/* Outlet is a placeholder for all of the child routes whenever they match,
          while the layout around it persists. Nested files === Nested layouts */}
      <Outlet />
    </div>
  );
}
