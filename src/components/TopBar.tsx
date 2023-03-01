import { Row, Avatar, Button } from "antd";

const MoonIcon = <svg
  viewBox="0 0 24 24"
  width="20"
  height="20"
  stroke="currentColor"
  strokeWidth="1"
  fill="none"
  strokeLinecap="round"
  strokeLinejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>;

const BellIcon = <Button type="ghost" style={{ margin: '-10px' }}>
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="1"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
</Button>

const TopBar = (props: any) => <Row
  align={'middle'} justify={'end'}
  style={{ height: '43px', background: !props.darkMode ? 'white' : '' }}
>
  {BellIcon}

  <Button
    type="ghost"
    onClick={props.toggleDarkMode}
    style={{ margin: '-10px' }}>
    {MoonIcon}
  </Button>

  <Avatar
    src="https://media.istockphoto.com/id/1399611777/fr/photo/portrait-dun-petit-gar%C3%A7on-souriant-aux-cheveux-bruns-regardant-lappareil-photo-enfant.jpg?s=612x612&w=0&k=20&c=NJmYuSARzGrGI51qnGIPQMN-P3harj72W05d9M9czf8="
    size={'default'}
    style={{ marginRight: 7, cursor: 'pointer' }}
  />

</Row>;

export default TopBar;