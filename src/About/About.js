import React, { Component } from 'react';
import '../About/About.css'

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>&lt;About /&gt;</h1>
        <section>
          <p>
            <img src={require("../About/person.png")} />
            <h3>&#123; Me &#125;</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor enim, luctus ac nisi vitae, consequat molestie sapien. Proin finibus commodo mi, nec rutrum risus semper at. Phasellus cursus efficitur vehicula. 
          </p>
          <p>
            <img src={require("../About/glasses.png")} />
            <h3>&#123; Skills &#125;</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor enim, luctus ac nisi vitae, consequat molestie sapien. Proin finibus commodo mi, nec rutrum risus semper at. Phasellus cursus efficitur vehicula. 
          </p>
          <p>
          <img src={require("../About/heart.png")} />
            <h3>&#123; Fun &#125;</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor enim, luctus ac nisi vitae, consequat molestie sapien. Proin finibus commodo mi, nec rutrum risus semper at. Phasellus cursus efficitur vehicula.
          </p>
        </section>
      </div>
    );
  }
}

export default About;