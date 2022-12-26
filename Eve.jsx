var React = require('react');
import {Image} from 'react-bootstrap';
var {Link} = require('react-router');

var Eve = () => {
    return (
        <div>
          <section className="appsSplash">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                        <h1>Eve Alarm</h1>
                        <h2>An app that helps you improve your sleep by reminding you when to go to bed</h2>
                          <p className="topMarginSmall"><strong>Role:</strong> Design & Development</p>
                          <p><strong>Platform:</strong> iOS</p>
                          <p><strong>Language:</strong> Objective-C</p>
                          <p className="topMarginSmall"><strong>Link:</strong> <a href="https://itunes.apple.com/gb/app/eve-alarm-time-to-sleep/id633081958?mt=8">App Store</a></p>
                      </div>
                  </div>
              </div>
          </section>
            <section className="topBottomMargins">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                          <div className="appDescriptionBody">
                            <h2>Idea</h2>
                            <blockquote>If you go to bed early and get a restful night's sleep then you shouldn't need an alarm in the morning.</blockquote>
                            <p>This was the idea behind Eve Alarm. Most people can't choose that time at which they wake up, but they can choose when to go to bed. Eve Alarm is an alarm app that uses this thinking to flip a tradition alarm on its head: <em>a bed time alarm</em> rather than a wake time alarm.</p>
                      </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topBottomLargeMargins">
                <div className="container-fluid">
                    <div className="appDescriptionBody">
                        <div className="col-sm-8"><Image src={require('../images/eve_concept.jpg')} className="width100"/>
                        </div>
                        <div className="col-sm-4">
                          <h2>Design Concept</h2>
                            <p>It's important to me that a user interface is easy to understand and related to the subject of the product. I experimented and came up with the concept of a clickwheel based design which mirrors the shape of the sun. When the clickwheel is rotated the whole background of the app slides up and down to create a sunrise and sunset.</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="topBottomLargeMargins colourBack">
                <div className="container">
                    <div className="appDescriptionBody">
                          <div className="col-sm-12">
                            <h2>UI & Graphic Design</h2>
                              <p>I used mainly gradients and flat colours in the user interface. This app was designed before iOS 7 was released so the design was aiming to incorportate the design language that was expected for iOS's major redesign. </p>
                          </div>
                  </div>
                </div>
                <div className="container-fluid topMargin">
                      <div className="col-sm-6"><Image src={require('../images/eve_interface1.jpg')} className="width100"/></div>
                        <div className="col-sm-6"><Image src={require('../images/eve_interface2.jpg')} className="width100"/></div>
                </div>
            </section>
            <section className="topBottomLargeMargins">
                <div className="container">
                    <div className="appDescriptionBody">
                        <div className="col-sm-4">
                          <h2>Reception</h2>
                            <p>Eve Alarm was featured on the App Store "What's Hot" utilities section for over 6 months and download over 10,000 times within the first 6 weeks of release. It currently has a 5 star rating on the App Store.</p>
                        </div>
                        <div className="col-sm-8"><Image src={require('../images/eve_reception.jpg')} className="width1500"/></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

module.exports = Eve;
