import React from "react";
import { useEffect, useState } from "react";
import { Layout, List, Typography, Card, Pagination } from "antd";

const { Content } = Layout;
const { Title, Text } = Typography;

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const perPage = 5;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    `https://www.crmcarecloud.com/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`
                );

                const data = await response.json();
                const total = response.headers.get("X-WP-TotalPages");

                setPosts(data);
                setTotalPages(Number(total));
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, [page]);

    return (
        <Layout>
            <Content>
                <Title>Články</Title>
                <img
                    src="../image/mojeaamberkey.svg"
                    alt="Moje Amber Logo"
                    className="main-logo"
                />

                <List
                   grid={{gutter: 2, column: 1}}
                    dataSource={posts}
                    renderItem={(post) => (
                        <List.Item key={post.id}>
                            <Card
                                title={
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {post.title.rendered}
                                    </a>
                                }
                            >
                                <Text type="secondary">
                                    {new Date(post.date).toLocaleDateString("cs-CZ")} —{" "}
                                    {post._embedded?.author?.[0]?.name || "Neznámý autor"}
                                </Text>
                            </Card>
                        </List.Item>
                    )}
                />


                    <Pagination
                        defaultCurrent={page}
                        total={totalPages * perPage}
                        pageSize={perPage}
                        onChange={(p) => setPage(p)}
                    />

            </Content>
        </Layout>
    );
};

export default PostsList;
