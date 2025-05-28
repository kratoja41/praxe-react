import {Tabs, Card, Typography, Row, Col} from "antd";
import {CheckOutlined, CalendarOutlined, PlusSquareOutlined} from "@ant-design/icons";
import HabitTab from "./HabitTab"; // Přidej import nahoře

const {Title, Text} = Typography;

const TabLayout = ({title, tabs, icon, description}) => (
    <Card style={{backgroundColor: "#f7f5fb", borderRadius: 8}}>
        <Tabs defaultActiveKey="1" items={tabs}/>
        <div style={{textAlign: "center", padding: "40px 10px"}}>
            {icon}
            <Title level={5} style={{marginTop: 16}}>{title}</Title>
            <Text type="secondary">{description}</Text>
        </div>
    </Card>
);

export default function DashboardLayout() {

    return (
        <div style={{padding: "2rem"}}>
            <Row gutter={[16, 16]} justify="center">
                <Col md={8}>
                    <TabLayout
                        tabs={[
                            { key: "1", label: "All", children: <HabitTab /> },
                        ]}
                         />
                </Col>

                <Col  md={8}>
                    <TabLayout
                        title="These are your Dailies"
                        tabs={[
                            {key: "1", label: "All", children: <div>Add a Daily</div>},

                        ]}
                        icon={<CalendarOutlined style={{fontSize: 40, color: "#aaa"}}/>}

                    />
                </Col>

                <Col md={8}>
                    <TabLayout
                        title="These are your To Do's"
                        tabs={[
                            {key: "1", label: "Active", children: <div>Add a To Do</div>},
                        ]}
                        icon={<CheckOutlined style={{fontSize: 40, color: "#aaa"}}/>}

                    />
                </Col>
            </Row>
        </div>
    );
}
