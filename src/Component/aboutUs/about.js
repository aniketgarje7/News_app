import logo from "../../assets/nesLogo.png"
import "./aboutUs.css";

const AboutUs = () =>{
    return <>
       <h1 style={{textAlign:'center'}}>About Us</h1>
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
       <hr/>
         <img src={logo} className="imgabout" alt="brand logo"></img>
    </>
}
export default AboutUs;