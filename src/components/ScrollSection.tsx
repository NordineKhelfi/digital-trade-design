import { Col, List, Skeleton } from "antd";

const ScrollSection = () => <Col
  className='scroll-section'
  md={{ span: 12, order: 1 }}
  sm={{ span: 24, order: 2 }}
  xs={{ span: 24, order: 2 }}
  style={{
    overflow: 'scroll',
    paddingRight: 15,
    maxHeight: window.innerWidth < 768 ?
      'calc(100vh - 185px)' :
      'calc(100vh - 73px)'
  }}>
  <List
    grid={{ column: 2 }}
    dataSource={new Array(10).fill('')}
    renderItem={(item) => (
      <List.Item>
        <Skeleton active paragraph={{ rows: Math.trunc(Math.random() * 10) }} />
      </List.Item>
    )}
  />
</Col>;

export default ScrollSection;