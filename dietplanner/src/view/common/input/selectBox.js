import React, {useState} from 'react';
import {useBorderSelectStyles} from '@mui-treasury/styles/select/border';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const SelectBox = ({inputLabel, onSelect, menuItems, defaultValue=""}) => {
    const [val, setVal] = useState(defaultValue);

    const handleChange = (event) => {
        setVal(event.target.value);
        if(onSelect){
            onSelect(event);
        }
    };

    const borderSelectClasses = useBorderSelectStyles();

    // moves the menu below the select input
    const menuProps = {
        classes: {
            list: borderSelectClasses.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };

    const iconComponent = (props) => {
        return (
            <ExpandMoreIcon className={props.className + " " + borderSelectClasses.icon}/>
        )
    };

    return (
        <FormControl>
            <InputLabel
                className={borderSelectClasses.label}
                id="inputLabel"
            >{inputLabel}
            </InputLabel>
            <Select
                disableUnderline
                classes={{root: borderSelectClasses.select,}}
                labelId="inputLabel"
                IconComponent={iconComponent}
                MenuProps={menuProps}
                value={val}
                onChange={handleChange}
            >
                {menuItems.map(menuItem => {
                    return menuItem;
                })};
            </Select>
        </FormControl>
    );
};


export default SelectBox;