
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleMediaQuery({children, query}) {

    const matches = useMediaQuery(query || '(max-width:1050px)');

    return matches && children;
}