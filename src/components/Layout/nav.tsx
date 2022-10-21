import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox';

const navItem = [
   {
      href: '/',
      name: 'Home'
   },
   {
      href: '/books',
      name: 'Books'
   },
   {
      href: '/characters',
      name: 'Characters'
   }
];

const Nav: React.FC = () => {
   return (
      <div className="relative pt-6 lg:pt-2 flex items-center justify-between px-8 py-2 border">
         <div>
            <h3 className="text-secondary font-bold text-3xl ">
               <Link to='/'>fire&Ice</Link>
            </h3>
         </div>
         <nav className="">
            <SearchBox />
            <ul className="flex gap-4">
               {navItem.map((x) => (
                  <li key={x.name}>
                     <Link className="text-secondary text-xl hover:text-purple-500" to={x.href}>
                        {x.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
};

export default Nav;
