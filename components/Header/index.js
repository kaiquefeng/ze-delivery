import React from 'react';
import logoImg from "../../assets/logo.png";
import Link from 'next/link';

import '../../pages/_app';


const Header = () => (
    <div className="header-delivery">
        <Link href="/"><img src={logoImg} /></Link>
    </div>
)

export default Header;