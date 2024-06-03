import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Profile from './component/Profile/Profile'
import Timeline from './component/Timeline/Timeline';


const education = [
  [
    {
      v: "Computer Engineer",
      f: '<div style="color:red; font-style:italic">dfasfds</div>',
    },
    "",
    "",
  ],
  [
    {
      v: "Computer Engineer",
      f: '<div style="color:red; font-style:italic; width:300px">Computer Engineer @ Kasetsart University<br/>จิรพงษ์ วัฒนธรรม, วิทยา จิรัฐิติเจริญ และ ฐิติวรรณ ศรีนาค, "ระบบจดจำตัวอักษรสำหรับการแปลตัวสะกดตัวอักษรภาษามือไทย", The 2nd ECTI-Conference on Application Research and Development (ECTI-CARD), Chonburi, Thailand, pages 572-577, May 10-12, 2010.จิรพงษ์ วัฒนธรรม, วิทยา จิรัฐิติเจริญ และ ฐิติวรรณ ศรีนาค, \
            <br/>, Chonburi, Thailand, pages 572-577, May 10-12, 2010. \
            <br/>The 2nd ECTI-Conference on Application Research and Development (ECTI-CARD) · May 10, 2010</div>',
    },
    "Computer Engineer",
    "VP",
  ],
  [
    {
      v: "Associate Software Engineer",
      f: '<b>Associate Software Engineer</b><div style="aligh:left; color:red; font-style:italic">AIM<p/>Game Developer<p/>C++,C#,Mysql<a href="https://www.youtube.com/watch?v=uQZGVDkEShs">link</a></div>',
    },
    "Computer Engineer",
    "",
  ],
]

const job = [
  [
    {
      v: "Associate Software Engineer",
      f: '<b>Associate Software Engineer</b><div style="aligh:left; color:red; font-style:italic">AIM<p/>Game Developer<p/>C++,C#,Mysql<a href="https://www.youtube.com/watch?v=uQZGVDkEShs">link</a></div>',
    },
    "",
    "",
  ],
  [
    {
      v: "Associate Software Engineer",
      f: '<div style="float:left; width: 400px; white-space: normal;"><b>Associate Software Engineer @ AIM company</b> <p/>Junior passionate Game developer <p/> C++,C#,Mysql<a href="https://www.youtube.com/watch?v=uQZGVDkEShs">link</a></div>',
    },
    "Associate Software Engineer",
    "",
  ],[
    {
      v: "Software Engineer",
      f: '<b>Software Engineer</b><div style="aligh:left; color:red; font-style:italic">AIM<p/>Game Developer<p/>C++,C#,Mysql<a href="https://www.youtube.com/watch?v=uQZGVDkEShs">link</a></div>',
    },
    "Associate Software Engineer",
    "",
  ],
]

const job2 = [
  [
    {
      v: "Associate Software Engineer",
      f: '<b>Associate Software Engineer</b><div style="aligh:left; color:red; font-style:italic">AIM<p/>Game Developer<p/>C++,C#,Mysql<a href="https://www.youtube.com/watch?v=uQZGVDkEShs">link</a></div>',
    },
    "",
    "",
  ],
  [
    {
      v: "Associate Software Engineer",
      f: '<div><b>Associate Software Engineer @ AIM company</b> <p/>C++,C#,Mysql<a href="https://www.youtube.com/watch?v=uQZGVDkEShs">link</a></div>',
    },
    "Associate Software Engineer",
    "",
  ],[
    {
      v: "Software Engineer",
      f: '<b>Software Engineer</b><div style="aligh:left; color:red; font-style:italic">AIM<p/>Game Developer<p/>C++,C#,Mysql<a href="https://www.youtube.com/watch?v=uQZGVDkEShs">link</a></div>',
    },
    "Associate Software Engineer",
    "",
  ],
]

function App() {
  return (
    <div style={{backgroundImage: "url('/images/laptop.jpg')",backgroundSize:"100% 130%",height:"100vh" }}  >
    <Grid container spacing={1} >

      <Grid xs={12} >
        <center><Profile></Profile></center>
      </Grid>
      <Grid xs={4}>
        <Timeline data={education}></Timeline>
      </Grid>
      <Grid xs={4}>
      <Timeline data={job}></Timeline>
      </Grid>
      <Grid xs={4}>
      <Timeline data={job2}></Timeline>
      </Grid>
    </Grid>
    </div>
  );
}
export default App;
