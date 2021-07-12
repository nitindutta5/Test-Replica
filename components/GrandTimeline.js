import React, { useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline'
import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/GrandTimeline.module.css'
import classnames from 'classnames'
import timelineData from '../timelinedata'
const VALUES = ['1950', '1960', '1970', '1977', '1978', '1979', '1980', '1986', '1987', '1991', '1994', '1996', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2011', '2012', '2013', '2014', '2015', '2015', '2016', '2017', '2019', '2020'];
const GrandTimeline = () => {
  const [initialState, changeState] = useState({
    value: 0,
    previous: 0
  });
  return (
    <Container>
      <Row>
        <Col md="10" className="mx-auto">

          <div id="mytimeline2" style={{ width: '100%', height: '100px', margin: '0 auto' }}>
            <HorizontalTimeline slidingMotion={{ stiffness: '150', damping: '25' }} getLabel={(date) => date} styles={{ background: '#fff', foreground: '#363C4C', outline: '#363C4C' }}
              index={initialState.value}
              index={initialState.value}
              indexClick={(index) => {
                changeState({ value: index, previous: initialState.value });
              }}
              values={VALUES} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className={classnames({ "mx-auto": true })}>

          <div className={classnames({ "mx-auto": true, [styles.heading]: true })} dangerouslySetInnerHTML={{ __html: timelineData[initialState.value].date }} />
          {/* <div className={styles.paraTitle}>THE BEGINNING</div> */}
          <div className={styles.para}>{timelineData[initialState.value].content}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default GrandTimeline

