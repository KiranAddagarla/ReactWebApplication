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
                                    <li> <LabelImportantRoundedIcon></LabelImportantRoundedIcon><label>ABOUT ME</label></li>
                                    <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><label>PROFESSIONAL SUMMARY</label></li>
                                    <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><label>TECHNOLOGICAL EXPERTISE</label></li>
                                    <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><label>PROJECTS HANDLED</label></li>
                                    <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><label>CONTACT ME</label></li>
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