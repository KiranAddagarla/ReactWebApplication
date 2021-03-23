import React from 'react';
import mypicture from '../mediaFiles/Chandra Kiran.jpeg';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import '../App.css';

const HeaderSection = () =>{  
    return (
        <header>
            <div className = 'headerSection'>                
                <table className = 'headerSection headerContainer'>
                    <tr>
                        <td>
                            <img className = 'headerSection headerContainer myPicture' src = {mypicture} />
                        </td>
                        <td>
                            <div>
                                <ul>
                                    <li> <LabelImportantRoundedIcon></LabelImportantRoundedIcon>ABOUT ME</li>
                                    <li>PROFESSIONAL SUMMARY</li>
                                    <li>TECHNOLOGICAL EXPERTISE</li>
                                    <li>PROJECTS HANDLED</li>
                                    <li>CONTACT</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </table>
                
            </div>  
      </header>
    )
};

export default HeaderSection;