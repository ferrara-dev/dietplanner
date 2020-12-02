import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableRow = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.action.hover
    }
}))
(TableRow);