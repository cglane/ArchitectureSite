import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

class CustomFooter extends React.Component {
  render() {
    const s1 = { verticalAlign: 'middle' };
    const s2 = { textAlign: 'right' };

    return (
      <Appbar>
       <table width="100%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height">Left Side</td>
             <td className="mui--appbar-height" style={s2}>Right Side</td>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
  }
}
export default CustomFooter