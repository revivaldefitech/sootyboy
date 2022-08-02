import Image from 'next/image'
import { useEffect, useState } from 'react';
import logoHorizontal from '../../public/img/logo-horizontal.png';
// Components
import Connect from './Connect';

export default function MenuTop() {
  const [styleBg, setStyleBg] = useState(false);
  const pixelsToScrollBeforeStyleBg = 64;
  

  useEffect(() => {
    window.addEventListener('scroll', function() {
      scrollY > pixelsToScrollBeforeStyleBg 
      ? setStyleBg(true) 
      : setStyleBg(false)
    });
  }, [])

  return (
    <Link to = 'https://rvl.finance/'
    <div className="navbar max-w-3xl mx-auto mt-2">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <Image
            src={logoHorizontal}
            alt="Logo"
            width={150}
            height={46}
            priority
          />
        </a>
      </div>
      </link>
      <div className="flex-none">
        <Connect />
      </div>
    </div>
  );
}
