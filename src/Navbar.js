import { useResolvedPath, useMatch, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">abstract</Link>
            <ul>
                <li><CustomLink to="/">Home</CustomLink></li>
                <li><CustomLink to="/about">About</CustomLink></li>
                <li><CustomLink to="/services">Services</CustomLink></li>
                <li><CustomLink to="/login" className="log-in-button">Login</CustomLink></li>
            </ul>
        </nav>
        )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li>
            <Link to={to} className={isActive ? "active" : ""} {...props}>{children}</Link>
        </li>
    )
}