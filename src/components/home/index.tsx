import React, { FC, ReactNode } from 'react';
import { Paper, Zoom, Fab, useScrollTrigger, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pink, blue, purple } from '@material-ui/core/colors';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

interface IProps {}
interface IScrollProps {
  children?: ReactNode,
  window?: any,
}
interface IState {}

const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    // top: theme.spacing(8),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  hyphenStyle: {
    height: '2px',
    width: '100%',
    lineHeight: 0,
    background: pink['A200'],
  },
  paperStyle: {
    width: '1200px',
  },
  upTopStyle: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  section: {
    '& div': {
      display: 'flex',
      flexDirection: 'column',

      '& button, & label': {
        marginBottom: '16px',
        width: '200px',
      },
    },
    '& p': {
      display: 'flex',
      flexDirection: 'column',

      '& span': {
        marginBottom: '16px',
      },
    },
    '& ul': {
      '& li': {
        marginBottom: '16px',
      },
    },
  },
}));

const ScrollTop = (props: IScrollProps) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const onTop = (event: any) => {
    // console.log('--- ', document.querySelector('#back-to-top'));
    const anchor = document.querySelector('#back-to-top');

    if(anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={onTop} role="presentation">
        {children}
      </div>
    </Zoom>
  )
}

const Home: FC = (props: IProps, state: IState) => {

  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <p id="back-to-top" className={classes.hyphenStyle} />

        <Paper square={true} className={classes.paperStyle}>
          <section className={classes.section}>

            <div>
              <label>Contained</label>
              <Button variant="contained" color="primary">Primary Button</Button>
              <Button variant="contained" color="secondary">Secondary Button</Button>
              <Button variant="contained">Default Button</Button>
              <label>Outlined</label>
              <Button variant="outlined" color="primary">Primary Button</Button>
              <Button variant="outlined" color="secondary">Secondary Button</Button>
              <Button variant="outlined">Default Button</Button>
            </div>

            <p>
              <span style={{color: pink['A400']}}>Primary color: Here are some examples of customizing the component.</span>
              <span style={{color: blue['A400']}}>Secondary color: Here are some examples of customizing the component.</span>
              <span style={{color: purple['A400']}}>Default color: Here are some examples of customizing the component.</span>
              <span style={{color: pink['A400']}}>Primary color: 银河系物质的主要部分组成一个薄薄的圆盘</span>
              <span style={{color: blue['A400']}}>Secondary color: 银河系物质的主要部分组成一个薄薄的圆盘</span>
              <span style={{color: purple['A400']}}>Default color: 银河系物质的主要部分组成一个薄薄的圆盘</span>
            </p>

            <ul>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果</li>
              <li>测试滚动效果 last last</li>
            </ul>
          </section>

          <ScrollTop>
            <Fab size="small" color="primary"
              className={classes.upTopStyle}>
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Paper>
      </div>
    </>
  )
}

export default Home;
