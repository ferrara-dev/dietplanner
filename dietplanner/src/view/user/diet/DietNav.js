
import React from "react";
import {DrawerSidebar, Header, SubHeader, Trigger} from "../../common/layout/styled";
import {GmailTabItem, GmailTabs} from "@mui-treasury/components/tabs/gmail";
import {Inbox, ShowChart, Update} from "@material-ui/icons";
import {List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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

export default function DietNavView({ activeIndex, onIndexChange, newUpdate}) {
    const hiddenStyle = useHiddenStyle();
    return <>
        <Header>
            <div className={hiddenStyle.hiddenTrigger}>
                <Trigger sidebarId={"edgeSidebar"}/>
            </div>
                <>
                    <GmailTabs value={activeIndex} onChange={(e, value) => onIndexChange(value)}>
                        <GmailTabItem
                            icon={<Inbox/>}
                            value={0}
                            label={"Meal plan"}
                            tag={newUpdate && "New update"}
                        />
                        <GmailTabItem
                            value={1}
                            icon={<ShowChart/>}
                            label={"Current category"}
                        />
                        <GmailTabItem
                            value={2}
                            icon={<Update/>}
                            label={"Current meal"}
                        />
                    </GmailTabs>
                </>
        </Header>
    </>
};

function Wrap({children, Wrapper}) {

}
