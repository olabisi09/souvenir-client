import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            Looks like the page you're looking for doesn't exist.
            <Link to={'/'}>Back to home</Link>
        </div>
    )
}

export default PageNotFound;