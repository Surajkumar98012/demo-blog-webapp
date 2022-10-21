import React,{useEffect, useState} from 'react'
import { Container, Row, Col } from 'bootstrap-4-react';

const Blog = () => {

    const [users,setUsers]=useState([]);

    const getBlog =()=>{
         fetch("http://prod-node.janelaaj.com:3000/blogs/blogsList")
        .then((response)=>{
            return response.json()
        }).then((result)=>{
            let blogs=result.data
            setUsers(blogs)
        })
    }

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <>
        <h1  style={{ color: 'Black',textAlign:'center', padding: 20 }}>My Blogs</h1>
      <Container>
        {
            users.map((data)=>{
                return(
                    <div key={data.desc}>
         <Row>
          <Col col="md-4"><img style={{ width:"100%",height:"100%",padding:"5px"}} src={data.img} alt="this is blog image" /></Col>
          <Col col="md-8">
            <Container>
                <Row style={{padding:"5px"}}>
                <h1>{data.title}</h1>
                </Row>
                <Row style={{padding:"5px"}}>
                <p>{data.desc}</p>
                </Row>
            </Container>
          </Col>
        </Row>
            </div>
                )
            })
        }
      </Container> 
        </>
    )
}

export default Blog