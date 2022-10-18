import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="flex justify-between items-center px-8 py-4 border">
         <div>
            <h3 className="text-secondary font-bold text-3xl ">fire&Ice</h3>
         </div>
    
         <nav>
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
