import React from 'react';
import mypicture from '../mediaFiles/Chandra Kiran.jpeg';
import HeaderContent from './headerContent';
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
                                <HeaderContent />
                            </div>
                        </td>
                    </tr>
                </table>
                
            </div>  
      </header>
    )
};

export default HeaderSection;