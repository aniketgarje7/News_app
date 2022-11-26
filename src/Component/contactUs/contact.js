import { Container ,Row,Col} from "react-bootstrap";
import './index.css'
import logo from "../../assets/nesLogo.png"

const Contact = ()=>{
    return <div className="page">
    <h1 id="h1">Contact Us</h1>
    <p className="para">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio
     magnam pariatur ducimus, reiciendis id, unde repellendus ea debitis,
     minus sed. Autem, repudiandae. Aliquam aperiam ipsum cumque iste.
     Consequuntur architecto enim accusantium, quae sed et tempora earum
     sapiente necessitatibus nulla atque consequatur ratione itaque
     voluptatibus sequi nostrum accusamus minus quia dolorem rem recusandae
     ducimus est. Expedita repellendus illo ut quaerat culpa eveniet
     repudiandae, atque recusandae maxime magni sit rerum velit ad! Quisquam
     odio inventore minima ullam, expedita ea sunt ratione molestiae ex
     magnam at magni, blanditiis, accusamus harum vitae debitis quaerat nemo!
     Libero explicabo minus praesentium aliquid illum voluptas nesciunt,
     commodi qui molestiae ipsa. Debitis laudantium iste odit eveniet vitae
     assumenda molestiae quidem itaque accusamus minima autem doloremque
     blanditiis ex quam, quibusdam corporis accusantium sapiente alias
     incidunt quas. Temporibus voluptas necessitatibus neque animi omnis
     earum sit in, aperiam quibusdam ipsam recusandae vel libero alias
     laboriosam culpa porro dolores repellendus vitae corporis dolor possimus
     ut! Ipsa eligendi, labore et esse laboriosam fuga nisi nemo veniam culpa
     ab quidem deleniti quam odio dolor tenetur, dignissimos ea praesentium
     consequuntur. Perferendis ducimus totam deleniti?
    </p>
    
    
    <Container>
        <Row id="row1">
            <Col className="col" md={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio
     magnam pariatur ducimus, reiciendis id, unde repellendus ea debitis,
     minus sed. Autem, repudiandae. Aliquam aperiam ipsum cumque iste.
     Consequuntur architecto enim accusantium, quae sed et tempora earum
     sapiente necessitatibus nulla 
            </Col>
            <Col md={4}>
             <img src={logo} alt="brand logo" className="logo"/>
            </Col>
            <Col className="col" md={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio
     magnam pariatur ducimus, reiciendis id, unde repellendus ea debitis,
     minus sed. Autem, repudiandae. Aliquam aperiam ipsum cumque iste.
     Consequuntur architecto enim accusantium, quae sed et tempora earum
     sapiente necessitatibus nulla 
            </Col>
            
        </Row>
        <Row id="row2">
            <Col id="colLast" md={{span:6,offset:3}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio
     magnam pariatur ducimus, reiciendis id, unde repellendus ea debitis,
     minus sed. Autem, repudiandae. Aliquam aperiam ipsum cumque iste.
     
     </Col>
        </Row>
    </Container>

    </div>
}
export default Contact;