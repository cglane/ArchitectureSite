import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import {
  Link
} from 'react-router-dom'

class CustomFooter extends React.Component {
  render() {
    const s1 = { verticalAlign: 'middle' };
    const s2 = { textAlign: 'right' };

    return (
      <Appbar className="footer">
       <table width="100%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height">
             <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
             </td>
             <td className="mui--appbar-height at-vdl" style={s2}>@VDL Associates LLC 2017</td>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
  }
}
export default CustomFooter