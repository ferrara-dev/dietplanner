import useSizedIconButtonStyles from "@mui-treasury/styles/iconButton/sized";
import useRowGutterStyles from "@mui-treasury/styles/gutter/row";
import {ScrollView, useCheckboxStyles} from "./styledComponents";
import React from "react";
import {DrawerSidebar, SubHeader, Trigger} from "../../common/layout/styled";
import {GmailTabItem, GmailTabs} from "@mui-treasury/components/tabs/gmail";
import {Inbox, Info, LocalOffer, ShowChart, Update} from "@material-ui/icons";
import {List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import {fade} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";


const useHiddenStyle = makeStyles(({theme, palette, breakpoints}) => ({
    hiddenTop: {
        [breakpoints.down('sm')]: {
            display: "none"
        },
    },
    hiddenTrigger: {
        [breakpoints.up('md')]: {
            display: "none"
        },
    },
}));

export default function UserProfileNavView({ activeIndex, onIndexChange, newUpdate}) {
    const hiddenStyle = useHiddenStyle();
    return <>
        <div className={hiddenStyle.hiddenTrigger}>
           <DrawerSidebar sidebarId={"edgeSidebar"}>
               <>
                   <List>
                       <ListItem>
                           <Button
                               startIcon={<Inbox/>}
                               onClick={() => onIndexChange(0)}
                           >
                               Personal details
                           </Button>
                       </ListItem>
                       <ListItem>
                           <Button
                               startIcon={<ShowChart/>}
                               onClick={() => onIndexChange(1)}
                           >
                               Progress
                           </Button>
                       </ListItem>
                       <ListItem>
                           <Button
                               startIcon={<Update/>}
                               onClick={() => onIndexChange(2)}
                           >
                               Update
                           </Button>
                       </ListItem>
                   </List>
               </>
           </DrawerSidebar>
        </div>

    <SubHeader
        subheaderId={"profileHeader"}
    >
        <div className={hiddenStyle.hiddenTrigger}>
            <Trigger sidebarId={"edgeSidebar"}/>
        </div>
        <div className={hiddenStyle.hiddenTop}>
            <>
                    <GmailTabs value={activeIndex} onChange={(e, value) => onIndexChange(value)}>
                        <GmailTabItem
                            icon={<Inbox/>}
                            value={0}
                            label={"Personal details"}
                            tag={newUpdate && "New update"}
                        />
                        <GmailTabItem
                            value={1}
                            icon={<ShowChart/>}
                            label={"Progress"}
                        />
                        <GmailTabItem
                            value={2}
                            icon={<Update/>}
                            label={"Update"}
                        />
                    </GmailTabs>
            </>
        </div>
    </SubHeader>
        </>
};

function Wrap({children, Wrapper}) {

}
