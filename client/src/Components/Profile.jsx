import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    avatar: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        margin: "0 auto",
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

function Profile() {
    const classes = useStyles();
    const user = useSelector((state) => state.user);

    console.log(
        "user at profile",
        useSelector((state) => state.user)
    );
    console.log("user at profile user", user);
    return (
        <Grid container justifyContent="center">
            <Grid
                item
                xs={12}
                md={4}
                style={{ display: "flex", justifyContent: "center" }}
            >
                <Avatar
                    className={classes.avatar}
                    src={user.image_url}
                    alt="Profile Picture"
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" component="h3">
                        {user.firstname}
                    </Typography>
                    <Typography variant="subtitle1" component="h6">
                        @{user.lastname}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {user.bio}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {user.location}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {user.website}
                    </Typography>
                    <Grid container justify="center">
                        <Grid item>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                            >
                                Follow
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Profile;
