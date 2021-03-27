import React from 'react';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import '../App.css';

const HeaderContent = () => {
    return(
        <ul>
            <li> <LabelImportantRoundedIcon></LabelImportantRoundedIcon><button><label>ABOUT ME</label></button></li>
            <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><button><label>PROFESSIONAL SUMMARY</label></button></li>
            <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><button><label>TECHNOLOGICAL EXPERTISE</label></button></li>
            <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><button><label>PROJECTS HANDLED</label></button></li>
            <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><button><label>CONTACT ME</label></button></li>
        </ul>
    )
};

export default HeaderContent;