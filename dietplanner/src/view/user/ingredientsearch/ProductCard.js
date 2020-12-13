import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        minHeight: 140,
    },
});

export default function ProductCard({title, seeMore ,img}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia

                    className={classes.media}
                    image={img || "https://via.placeholder.com/728x90.png?text=No+Picture"}
                    title={title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                        seeMore();
                }}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}