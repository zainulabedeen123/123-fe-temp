import React, { useState } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, Checkbox, FormControlLabel, Switch, Button } from '@mui/material';
import { FiFilter } from 'react-icons/fi';

const FilterMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [checkedItems, setCheckedItems] = useState({
        featuresRequests: true,
        alerts: true,
        filters: true,
        scraping: true,
        onboarding: true,
        import: true,
        charts: true,
        export: true,
    });
    const [showUncategorized, setShowUncategorized] = useState(true);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleToggle = (item) => () => {
        setCheckedItems({ ...checkedItems, [item]: !checkedItems[item] });
    };

    const handleSwitchToggle = () => {
        setShowUncategorized(!showUncategorized);
    };

    return (
        <div>
            <Button
                onClick={handleClick}
                startIcon={<FiFilter />}
                sx={{
                    color: '#a3a3a3',
                    borderColor: '#a3a3a3',
                    fontSize: '14px',
                    textTransform: 'none',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    '&:hover': {
                        borderColor: '#a3a3a3',
                    },
                }}
                variant="outlined"
            >
                Filters
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        backgroundColor: '#1E252B',
                        color: '#fff',
                        borderRadius: '10px',
                        padding: '10px',
                        minWidth: '200px',
                    }
                }}
            >
                {Object.keys(checkedItems).map((item) => (
                    <MenuItem key={item} onClick={handleToggle(item)} sx={{ padding: '2px 4px', color: '#a3a3a3' }}>
                        <ListItemIcon>
                            <Checkbox
                                checked={checkedItems[item]}
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                                sx={{
                                    color: '#a3a3a3',
                                    '&.Mui-checked': {
                                        color: '#A3A3A3',
                                    },
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')} />
                    </MenuItem>
                ))}
                <hr/>
                <MenuItem sx={{ padding: '2px 4px', display: 'flex', justifyContent: 'space-between', color: '#a3a3a3' }}>
                    <span>Show uncategorized posts</span>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={showUncategorized}
                                onChange={handleSwitchToggle}
                                sx={{
                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                        color: '#ff007f',
                                    },
                                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                        backgroundColor: '#ff007f',
                                    },
                                }}
                            />
                        }
                        label=""
                    />
                </MenuItem>
            </Menu>
        </div>
    );
};

export default FilterMenu;
