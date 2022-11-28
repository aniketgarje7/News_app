import { Card,Button, Row ,Col,Spinner,Form} from "react-bootstrap";
import axios from 'axios'
import { useEffect,useState } from "react";
import './home.css'


const HomePage = ()=>{

    const [news,setNews] = useState([]);
    let content = 'For more information of this news please click on below button ,the content of this news not available at moment'
    let image = 'https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc='
    const [contry,setContry] = useState('in');
    useEffect(()=>{
      axios.get(`https://newsapi.org/v2/top-headlines?country=${contry}&apiKey=ffc9ff4508bf494798b6a1975edec0bd`).then((res)=>setNews(res.data.articles));
       console.log(contry)
    },[contry])
     
   
    return <>
    <Form.Select value={contry} onChange={(e)=>setContry(e.target.value)} aria-label="Default select example" style={{width:'20%',marginLeft:'40%',marginTop:'10px',paddingBottom:'0px'}}>
      <option value='in'>India</option>
      <option value="us">USA</option>
      <option value="ca">Canada</option>
      <option value="ua">Ukraine</option>
      <option value="ae">United Arab Emirates</option>
      <option value="gr">Greece</option>
      
    </Form.Select>
     <Row>{
        news.length?(
        news.map((singleNews,index)=> (
            <Col md={4}>
            <Card key={index} className="mainCard">
     <Card.Header className="cardHaider">{singleNews.author?singleNews.author:'Breaking News'}</Card.Header>
      <Card.Img variant="top" src={singleNews.urlToImage?singleNews.urlToImage:image} className='cardImage' />
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle'>{singleNews.title}</Card.Title>
        <Card.Text className='cardText'>
          {singleNews.content?singleNews.content:content}
        </Card.Text>
        <Button variant="primary" href={singleNews.url} target='_blank'>Full News</Button>
      </Card.Body>
    </Card>
    </Col>
        ))):(<Spinner animation="border" variant="primary" className='spinner' />)
     
        }
        </Row>
    
    </>
}
export default HomePage;