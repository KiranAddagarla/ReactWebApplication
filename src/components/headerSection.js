import React from 'react';
import mypicture from '../mediaFiles/Chandra Kiran.jpeg';
import HeaderContent from './headerContent';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import '../App.css';

const HeaderSection = () =>{  
    return (
        <header>
            <div className = 'container-fluid headerSection'> 
                <div className='row'>
                    <div className='col-lg-6'>
                        <img className = 'headerSection headerContainer myPicture' src = {mypicture} />
                    </div>
                    <div className='col-lg-6'>
                        <HeaderContent />
                    </div>
                </div>
                
            </div>  
      </header>
    )
};

export default HeaderSection;