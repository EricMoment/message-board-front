import React from "react";
import './NoUserPage.css'
import { Link } from "react-router-dom";

export default function NoUserPage() {
  return (
    <div className="no-user-page">
      The user does not exist.
      <Link className="no-user-page-return" to="/">Return to Main Page</Link>
    </div>
  )
}