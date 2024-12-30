import React from "react";
import { Typography, Row, Col } from "antd";

const { Title, Text } = Typography;

const Exchanges = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "50vh" }}>
      <Col>
        <Title level={3}>Exchanges</Title>
        <Text type="secondary">
          This feature is not available at the moment.
        </Text>
      </Col>
    </Row>
  );
};

export default Exchanges;
