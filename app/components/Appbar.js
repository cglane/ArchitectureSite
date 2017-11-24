import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import {
  Link
} from 'react-router-dom'

class AppbarCustom extends React.Component {
  render() {
    const s1 = { verticalAlign: 'middle' };
    const s2 = { textAlign: 'right' };

    return (
      <Appbar>
       <table width="100%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height">
              <Link to="/">VDL Associates</Link>
             </td>
             <td className="mui--appbar-height" style={s2}>
                <ul>
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/projects">Projects</Link></li>                  
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
             </td>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
  }
}
export default AppbarCustom