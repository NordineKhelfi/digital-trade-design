import { Card, Row, Col, Form, Input, Button } from "antd";
import Meta from "antd/es/card/Meta";
import { NotificationInstance } from "antd/es/notification/interface";
import { registerContact } from "../utils";

const FormCard = (props: { notificationApi: NotificationInstance; }) => <Card>
  <Row>
    <Col span={10}>
      <Meta
        title="Contact Us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
    </Col>
    <Col span={14}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={values => registerContact(values, props.notificationApi)}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='Email' />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Password' />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ background: '#7ebcd3', width: '100%' }}>
            Contact
          </Button>
        </Form.Item>
      </Form>
    </Col>
  </Row>
</Card>;

export default FormCard;