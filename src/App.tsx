import { Avatar, Card, Col, Row, notification, ConfigProvider, theme } from 'antd';
import SideMenu from "./components/SideMenu";
import Meta from 'antd/es/card/Meta';
import ScrollSection from './components/ScrollSection';
import FormCard from './components/FormCard';
import TopBar from './components/TopBar';
import 'antd/dist/reset.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [api, contextHolder] = notification.useNotification();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className="App" style={{background: darkMode ? '#141414' : ''}}>
      {contextHolder}

      <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>

        <Row wrap={false}>
          <Col>
            <SideMenu></SideMenu>
          </Col>
          <Col flex={'auto'} style={{ background: !darkMode ? '#f9f8f7' : '' }}>
            <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Row style={{ padding: 15 }}>
              <ScrollSection />
              <Col
                md={{ span: 12, order: 2 }}
                sm={{ span: 24, order: 1 }}
                xs={{ span: 24, order: 1 }}>
                <Card style={{marginBottom: 15}}>
                  <Meta
                    avatar={<Avatar
                      src="https://media.istockphoto.com/id/1399611777/fr/photo/portrait-dun-petit-gar%C3%A7on-souriant-aux-cheveux-bruns-regardant-lappareil-photo-enfant.jpg?s=612x612&w=0&k=20&c=NJmYuSARzGrGI51qnGIPQMN-P3harj72W05d9M9czf8="
                      size={'large'}
                    />}
                    title="Stay playful!"
                    description="Life's sad when you grow up"
                  />
                </Card>
                <Row>
                  <Col
                    md={{ span: 24 }}
                    sm={{ span: 0 }}
                    xs={{ span: 0 }}>
                    <FormCard notificationApi={api} />
                  </Col>
                </Row>
              </Col>

            </Row>
          </Col>
        </Row>

      </ConfigProvider>
    </div>
  );
}

export default App;
