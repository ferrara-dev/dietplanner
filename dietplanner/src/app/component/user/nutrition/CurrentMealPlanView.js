import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import {Link, useRouteMatch} from "react-router-dom";
import {AccordionSummary, Accordion, AccordionDetails, IconButton} from "@material-ui/core";
import {FormControlLabel} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {List,ListItem} from "@material-ui/core"
import {Add} from "@material-ui/icons"
export default function CurrentMealPlanView({meals, chooseMeal, addMeal}) {
    const classes = useStyles();
    const {url, path} = useRouteMatch()
    const [expanded, setExpanded] = React.useState({});

    const handleClick = (id) => {
        setExpanded({
            ...expanded,
            [id]: !expanded[id]
        });
    };

    return (
        <div className={classes.mealsRoot}>
            <Typography className={classes.header}>
                Meal plan
            </Typography>
            <Paper component="ul" className={classes.list}>
                {meals.map(({meal, alternatives}, index) => {
                    return (
                        <li key={index}>
                            <Accordion onClick={(e) => {
                                e.preventDefault();
                                chooseMeal({meal,alternatives});
                            }}>
                                <AccordionSummary>
                                <FormControlLabel
                                    aria-label="Acknowledge"
                                    onClick={(event) => {
                                        event.stopPropagation()
                                        chooseMeal({meal,alternatives})
                                    }}
                                    onFocus={(event) => event.stopPropagation()}
                                    control={<IconButton component={Link} to={`${path}/${meal}/edit`}><Add fontSize="small"/></IconButton>}
                                />
                                    {meal}
                            </AccordionSummary>
                                <AccordionDetails>
                                  <List>
                                      {alternatives.map((alternative, index) => {
                                          <ListItem key={index}>
                                              {alternative.label}
                                          </ListItem>
                                      })}
                                  </List>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    );
                })}
            </Paper>
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    list: {
        listStyle: 'none',
        marginBottom: 2,
    },
    title: {
        flex: '1 1 100%',
    },
    mealsRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));