import React from "react"
import CardContent from "@material-ui/core/CardContent"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  Container,
  Chip,
  Divider,
  Avatar,
  Box,
  Hidden
} from "@material-ui/core"
import Link from "@material-ui/core/Link"
import { graphql } from "gatsby"
import GitHubIcon from "@material-ui/icons/GitHub"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px"
  },
  cardMedia: {
    width: "100%",
    height: "auto",
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  chipActions: {
    display: "block"
  },
  chip: {
    margin: "8px 0 3px 8px"
  },
  iconCls: {
    marginLeft: "10px"
  },
  extraMargin: {
    marginTop: "15px",
    marginBottom: "0"
  },
  avatar: {
    height: 155,
    width: 155
  },
  btn: {
    textTransform: "none"
  },
  copyRight : {
    backgroundColor: theme.palette.secondary.main
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& dt": {
      marginTop: theme.spacing(2),
    },
    color: "#FFF",
  },
  iconSocialMedia: {
    color: "#fff",
    marginLeft:"-10px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paddingCls :{
    paddingLeft : '10px',
    paddingRight : '10px'
  },
  paddingClsxs:{
    padding : 0
  },
  iconSize: {
    fontSize: "32px",
  }
}))
function Footer() {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:600px)');

  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container component="dl"
            alignItems="center"
            justify="center"
            item
            xs={12}
            md={12}
            >          
            <List style={flexContainer}>
              <ListItem className={matches ? classes.paddingCls : classes.paddingClsxs} component="a" href="https://www.facebook.com/codeforcauseorg" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <FacebookIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Facebook"
                />
                </Hidden>
              </ListItem>
              <ListItem className={matches ? classes.paddingCls : classes.paddingClsxs} component="a" href="https://twitter.com/codeforcauseIn" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <TwitterIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Twitter"
                />
                </Hidden>
              </ListItem>
              <ListItem className={matches ? classes.paddingCls : classes.paddingClsxs} component="a" href="https://www.instagram.com/codeforcause/" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <InstagramIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Instagram"
                />
                </Hidden>
              </ListItem>
              <ListItem className={matches ? classes.paddingCls : classes.paddingClsxs} component="a" href="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <YoutubeIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Youtube"
                />
                </Hidden>
              </ListItem>
              <ListItem className={matches ? classes.paddingCls : classes.paddingClsxs} component="a" href="https://www.linkedin.com/company/codeforcauseorg/" target="_blank">
                <ListItemIcon className={classes.iconSocialMedia}>
                  <LinkedInIcon className={classes.iconSize} />
                </ListItemIcon>
                <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="LinkedIn"
                />
                </Hidden>
              </ListItem>
              </List>
          {/* </Grid> */}
        </Grid>
      </Container>
    </div>
  )
}

export default function Home({ data }) {
  const classes = useStyles()
  
  const edges = data.allContributorsJson.edges

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" >
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Pledge
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Take a Pledge
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              No one alone can change the world, So lets come together and Code
              for Cause. One pull request at a time.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    component="a"
                    href="https://github.com/codeforcauseorg/pledge"
                    color="primary"
                    target="_blank"
                  >
                    Create a Pull Request
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {edges.map((edge, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={edge.node.backgroundImg}
                    title="Image title"
                    height="240"
                  />
                  <Box mt={-16} display="flex" justifyContent="center">
                    <Avatar
                      alt="Contributor"
                      className={classes.avatar}
                      src={edge.node.image}
                      component={Link}
                    />
                  </Box>
                  {/* <Avatar alt="Remy Sharp" src={edge.node.image} /> */}

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {`I am ${edge.node.name}`}
                    </Typography>
                    <Typography>{`I code for ${edge.node.cause}`}</Typography>
                    <Typography className={classes.extraMargin}>
                      {`You can reach me at :`}
                    </Typography>
                    <Typography className={classes.extraMargin}>
                      {edge.node.github ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.github}
                          component="a"
                          target="_blank"
                        >
                          <GitHubIcon></GitHubIcon>
                        </Link>
                      ) : null}
                      {edge.node.github ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.twitter}
                          component="a"
                          target="_blank"
                        >
                          <TwitterIcon></TwitterIcon>
                        </Link>
                      ) : null}
                      {edge.node.github ? (
                        <Link
                          className={classes.iconCls}
                          href={edge.node.linkedin}
                          component="a"
                          target="_blank"
                        >
                          <LinkedInIcon></LinkedInIcon>
                        </Link>
                      ) : null}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions className={classes.chipActions}>
                    {edge.node.skills.slice(0, 3).map((skill, i) => (
                      <Chip
                        key={i}
                        className={classes.chip}
                        label={skill}
                        variant="outlined"
                        color="primary"
                        avatar={<Avatar>{skill[0].toUpperCase()}</Avatar>}
                      />
                    ))}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        Thank you for supporting us by the causes you have been coding for!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
        </Typography>        
      </footer>
      {/* End footer */}
      <Footer/>
     
    </React.Fragment>
  )
}
export const query = graphql`
  query ContributorsQuery {
    allContributorsJson {
      edges {
        node {
          name
          cause
          skills
          backgroundImg
          image
          github
          twitter
          linkedin
        }
      }
    }
  }
`
