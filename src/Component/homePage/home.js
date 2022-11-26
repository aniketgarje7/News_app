import { Card,Button, Row ,Col,Spinner} from "react-bootstrap";
import axios from 'axios'
import { useEffect,useState } from "react";
import './home.css'


const HomePage = ()=>{

    const [news,setNews] = useState([]);
    // const [change,setChange] = useState({});
    useEffect(()=>{
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=ffc9ff4508bf494798b6a1975edec0bd").then((res)=>setNews(res.data.articles));
       
    },[])

    return <>
     <Row>{
        news.length?(
        news.map((singleNews,index)=> (
            <Col md={4}>
            <Card key={index} className="mainCard">
     <Card.Header className="cardHaider">{singleNews.author}</Card.Header>
      <Card.Img variant="top" src={singleNews.urlToImage} className='cardImage' />
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle'>{singleNews.title}</Card.Title>
        <Card.Text className='cardText'>
          {singleNews.content}
        </Card.Text>
        <Button variant="primary" href={singleNews.url}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        ))):(<Spinner animation="border" variant="primary" className='spinner' />)
     
        }
        </Row>
    
    </>
}
export default HomePage;