import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../icons/404.jpg';
const NoMatch = () => (
<div>
<img src={PageNotFound}  alt="Page Not Found" style={{display: 'block', margin: 'auto', position: 'relative' }} />
<center><Link to="/">Return to MyReads</Link></center>
</div>
);
export default NoMatch;