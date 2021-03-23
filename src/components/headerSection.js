import React from 'react';
import mypicture from '../mediaFiles/Chandra Kiran.jpeg';
import '../App.css';

const HeaderSection = () =>{  
    return (
        <header>
            <div className = 'headerSection'>                
                <table className = 'headerContainer'>
                    <tr>
                        <td>
                            <img src = {mypicture} />
                        </td>
                        <td>
                            <div>
                                <ol>
                                    <li>ABOUT ME</li>
                                    <li>PROFESSIONAL SUMMARY</li>
                                    <li>TECHNOLOGICAL EXPERTISE</li>
                                    <li>PROJECTS HANDLED</li>
                                    <li>CONTACT</li>
                                </ol>
                            </div>
                        </td>
                    </tr>
                </table>
                
            </div>  
      </header>
    )
};

export default HeaderSection;