import React from 'react';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import '../App.css';

const HeaderContent = () => {
    return(
        <ul>
            <li> <LabelImportantRoundedIcon></LabelImportantRoundedIcon><a href = '#' ><label>ABOUT ME</label></a></li>
            <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><a><label>PROFESSIONAL SUMMARY</label></a></li>
            <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><a><label>TECHNOLOGICAL EXPERTISE</label></a></li>
            <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><a><label>PROJECTS HANDLED</label></a></li>
            <li><LabelImportantRoundedIcon></LabelImportantRoundedIcon><a><label>CONTACT ME</label></a></li>
        </ul>
    )
};

export default HeaderContent;