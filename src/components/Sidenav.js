// React
import React from "react";
import { useNavigate } from 'react-router-dom';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Material-UI Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';


// Custom Hooks
import { useAppStore } from '../appStore';
import {AttractionsOutlined, GroupAdd, Groups,  HowToRegOutlined, NotificationAdd, PointOfSale, Settings, TaskAltOutlined } from '@mui/icons-material';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);

  return (

    <Box sx={{ display: 'flex' }}>

      <Box height={30} />
      <CssBaseline />

      <Drawer variant="permanent" anchor='right' open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem className='dd' disablePadding sx={{ display: "block", marginTop: "25px" }} onClick={() => { navigate("/") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,

              }}
            >
              <DashboardIcon
                sx={{
                  minwidth: 0,
                  justifyContent: "center",
                }}
              >
                <InboxIcon />
              </DashboardIcon>
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>الرئيسيه</h4>
            </ListItemButton>
          </ListItem>


          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
              <ListItemButton sx={{ display: "contents" }}>
                <GroupAdd sx={{ minwidth: 0, justifyContent: "center" }}>
                  <InboxIcon />
                </GroupAdd>
                <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}> الاعضاء</h4>
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails >
              <List>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>

                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> اضافه عضو</h4>
                  </ListItemButton>
                </ListItem>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/ViewRenewal") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> 	تجديد عضويه </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/ViewCancel") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  ايقاف عضويه</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/MemberPerformance") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  متابعه اداء العضو</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/ViewRole") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> اضافه دور في الحزب</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/ViewTool") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  الرقابه على العضويه</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/ViewRules") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  القوانين المصدره من العضو</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>اضافه مخالفه – جزاء </h4>
                  </ListItemButton>
                </ListItem>


              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
              <ListItemButton sx={{ display: "contents" }} >
                <Groups sx={{ minwidth: 0, justifyContent: "center" }}>
                  <InboxIcon />
                </Groups>
                <h4 className='slider-text' style={{ fontSize: "20px !important", opacity: open ? 1 : 0 }}> اداره اجتماعات </h4>
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails >
              <List>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>

                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  ما قبل الاجتماع</h4>
                  </ListItemButton>
                </ListItem>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> 	الاجتماع </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  ما بعد الاجتماع</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> متابعه الاجتماعات</h4>
                  </ListItemButton>
                </ListItem>

              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
              <ListItemButton sx={{ display: "contents" }}>
                <PointOfSale sx={{ minwidth: 0, justifyContent: "center" }}>
                  <InboxIcon />
                </PointOfSale>
                <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}> الحسابات</h4>
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails >
              <List>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>

                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> تسديد العضويه </h4>
                  </ListItemButton>
                </ListItem>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> 	اضافه مصروفات  </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  اضافه تبرعات </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> اضافه ايرادات اخرى </h4>
                  </ListItemButton>
                </ListItem>

              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
              <ListItemButton sx={{ display: "contents" }}>
                <NotificationAdd sx={{ minwidth: 0, justifyContent: "center" }}>
                  <InboxIcon />
                </NotificationAdd>
                <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}> الطلبات</h4>
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails >
              <List>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>

                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>⦁ ملخص الطلب</h4>
                  </ListItemButton>
                </ListItem>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>⦁ طلب داخي</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>⦁ مقترح</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> ⦁	بيانات مقدم الطلب </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> ⦁	بيانات الطلب</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  ⦁	الاستجابه</h4>
                  </ListItemButton>
                </ListItem>

              </List>
            </AccordionDetails>
          </Accordion>


          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
              <ListItemButton sx={{ display: "contents" }}>
                <HowToRegOutlined sx={{ minwidth: 0, justifyContent: "center" }}>
                  <InboxIcon />
                </HowToRegOutlined>
                <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}> الانتخابات الداخلية </h4>
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails >
              <List>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>

                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> انواع التصويت</h4>
                  </ListItemButton>
                </ListItem>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> 	تعريف القرارات  </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>جدول التصويت </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>التصويت على القرارات</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> نتائج التصويت </h4>
                  </ListItemButton>
                </ListItem>


              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
              <ListItemButton sx={{ display: "contents" }}>
                <AttractionsOutlined sx={{ minwidth: 0, justifyContent: "center" }}>
                  <InboxIcon />
                </AttractionsOutlined>
                <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}> الفعليات</h4>
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails >
              <List>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>

                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> .....</h4>
                  </ListItemButton>
                </ListItem>


              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
              <ListItemButton sx={{ display: "contents" }}>
                <TaskAltOutlined sx={{ minwidth: 0, justifyContent: "center" }}>
                  <InboxIcon />
                </TaskAltOutlined>
                <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}> القرارات و التكليفات</h4>
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails >
              <List>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>

                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> .....</h4>
                  </ListItemButton>
                </ListItem>


              </List>
            </AccordionDetails>
          </Accordion>


          <Accordion className='accord' >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="dropdown-content"
              id="dropdown-header"

            >
              <ListItemButton sx={{ display: "contents" }}>
                <Settings sx={{ minwidth: 0, justifyContent: "center" }}>
                  <InboxIcon />
                </Settings>
                <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>الأعدادات</h4>
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails >
              <List>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>

                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  انواع العضويه</h4>
                  </ListItemButton>
                </ListItem>
                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>الاقسام-المراكز-الدوائر </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>  تعريف المجالس</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>ربط الاعضاء بالمجالس</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> تكويد بنود الايرادات</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}> تكويد بنود المصروفات</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>تكويد الغرامات</h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>تكويد بنود رسوم العضويه </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>تكويد اللجان </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>تكويد الصفه </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>تكويد المخالفات </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>تكويد الجزاءات </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>تكويد التبرعات </h4>
                  </ListItemButton>
                </ListItem>

                <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Members") }}>
                  <ListItemButton>
                    <h4 className='dd-text' style={{ opacity: open ? 1 : 0 }}>الانضمام الى لجنه  </h4>
                  </ListItemButton>
                </ListItem>



              </List>
            </AccordionDetails>
          </Accordion>

          <ListItem className=' logout' disablePadding sx={{ display: "block", marginTop: "" }} onClick={() => { navigate("") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
            >
              <LogoutIcon
                sx={{
                  minwidth: 0,
                  justifyContent: "center",
                }}
              >
                <InboxIcon />

              </LogoutIcon>
              <h4 className='slider-text' style={{ opacity: open ? 1 : 0 }}>تسجيل الخروج</h4>
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
    </Box>
  );
}
