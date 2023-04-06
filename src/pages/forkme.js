import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';

export default function GitHub() {
    let url = "https://github.com/christophercelaya/Learn_Prompting"
    useEffect(() => {
        window.location.href = url;
    }, []);

    return (
        <p>Redirecting to link..., please click <Link href={url} target="_self">here</Link> if not redirected</p>
    );
};