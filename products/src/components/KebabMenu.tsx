import React, { useState } from 'react'
import {
    IconButton,
    MoreVertIcon,
    Menu,
    MenuItem,
    AddShoppingCartIcon
} from "@frontend-starter/ui-components";

type KebabMenuProps = {

};

const KebabMenu = (props: KebabMenuProps) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = (response: any) => {
        setAnchorEl(null)
        return response
    }

    return (
        <>
            <IconButton
                aria-label="settings"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <MenuItem><IconButton>
                    <AddShoppingCartIcon />
                </IconButton>

                </MenuItem>

            </Menu>
        </>
    )
}

export default KebabMenu;