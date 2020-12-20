import LayoutBuilder, {Root} from "@mui-treasury/layout";
import {dailyShoppingTheme} from "@mui-treasury/mockup/brands/dailyShopping";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import {useLocation} from "react-router-dom";

export default function AppContent({children}) {
    const location = useLocation();
    const scheme = getScheme(location);
    return (

        <Root theme={dailyShoppingTheme} scheme={scheme}>
            <>
                <CssBaseline/>
                {children}
            </>
        </Root>
    );
};


function getScheme(location) {
    let reg3 = /\/profile(?=w*)/
    let reg4 = /\/diet(?=w*)/

    const scheme = LayoutBuilder();

    if (reg4.test(location.pathname)) {
        scheme.configureHeader((builder => {
            builder
                .create('appHeader')
                .registerConfig('xs', {
                    position: 'relative',
                    initialHeight: 56,
                })
        }))
        scheme.configureSubheader(builder => {
            builder.create("profileHeader")
                .registerConfig('xs', {
                    position: 'relative',
                    initialHeight: 40,
                    layer: 1,
                });
        });


        scheme.configureEdgeSidebar((builder) => {
            builder
                .create('edgeSidebar', {anchor: 'right'})
                .registerTemporaryConfig('xs', {
                    width: "55%",
                })
                .registerPermanentConfig('md', {
                    width: "40%", // recommended width
                    collapsible: false,
                    collapsedWidth: 64,
                });
        });

        return scheme;
    } else if (reg3.test(location.pathname)) {

        scheme.configureSubheader(builder => {
            builder.create("profileHeader")
                .registerConfig('xs', {
                    position: 'relative',
                    initialHeight: 40,
                    layer: 1,
                });
        });

        scheme.configureEdgeSidebar(builder => {
            builder
                .create('edgeSidebar', {anchor: 'left'})
                .registerTemporaryConfig('xs', {
                    width: 256,
                });
        });

        return scheme;
    } else {
        scheme.configureEdgeSidebar((builder) => {
            builder
                .create('edgeSidebar', {anchor: 'right'})
                .registerTemporaryConfig('xs', {
                    width: "1%",
                });
        });
    }
    return scheme;
}