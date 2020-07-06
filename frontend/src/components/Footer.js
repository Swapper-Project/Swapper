import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#333333',
    paddingTop: 12,
    minHeight: 150,
    color: '#ffffff'
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#333333',
    margin: 10
  },
  footerItems: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '75%',
    justifyContent: 'center'
  },
  footerItem: {
    height: 100,
    width: '25%',
    minWidth: 150,
    marginTop: 15
  },
  copyrightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    textAlign: 'center',
    color: 'white',
    margin: 10
  },
  copyrightIcon: {
    fontSize: 15,
    marginLeft: 2,
    marginRight: 5
  },
  swapperTitle: {
    width: '25%',
    minWidth: 205,
    textAlign: 'center'
  },
  socialIcon: {
    fontSize: 30
  },
  contactItemContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  contactText: {
    marginLeft: 5
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.footerContainer}>
        <div className={classes.swapperTitle}>
          <Typography variant='h3'>Swapper</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel
            mattis ligula. Nam sagittis orci ut libero sagittis, nec aliquam ex
            condimentum. Fusce id turpis fermentum dolor dignissim fermentum.
          </Typography>
        </div>
        <div className={classes.footerItems}>
          <div className={classes.footerItem}>
            <Typography variant='h5'>Support</Typography>
            <Typography>Terms & Conditions</Typography>
            <Typography>FAQ</Typography>
          </div>
          <div className={classes.footerItem}>
            <div>
              <Typography variant='h5'>Contact Us</Typography>
              <div className={classes.contactItemContainer}>
                <MailOutlineIcon />
                <Typography className={classes.contactText}>
                  swapper@gmail.com
                </Typography>
              </div>
              <div className={classes.contactItemContainer}>
                <PhoneIcon />
                <Typography className={classes.contactText}>
                  +1 XXX XXX XXXX
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.footerItem}>
            <Typography variant='h5'>Follow Us</Typography>
            <FacebookIcon className={classes.socialIcon} />
            <InstagramIcon className={classes.socialIcon} />
            <TwitterIcon className={classes.socialIcon} />
            <YouTubeIcon className={classes.socialIcon} />
          </div>
        </div>
      </div>
      <div>
        <Divider variant='middle' light={false} />
        <div className={classes.copyrightContainer}>
          <Typography>Bay Area, California |</Typography>
          <CopyrightIcon className={classes.copyrightIcon} variant='middle' />
          <Typography>Copyright 2020 Swapper</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
