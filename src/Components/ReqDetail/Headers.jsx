import React from 'react';
import PropTypes from 'prop-types';

import General from './headers/General';
import Response from './headers/Response';
import Request from './headers/Request';
import QueryString from './headers/QueryString';
import FormData from './headers/FormData';
import HeaderInfo from './headers/HeaderInfo';
import Styles from './Headers.styles.scss';

const Headers = ({ data }) => (!data ? null : (
  <section className={Styles['headers-container']}>
    <HeaderInfo
      component={General}
      data={data}
      eventKey="general"
    />
    <HeaderInfo
      component={Response}
      data={data}
      eventKey="response"
    />
    <HeaderInfo
      component={Request}
      data={data}
      eventKey="request"
    />
    {data.headers.queryString && data.headers.queryString.length > 0 && (
      <HeaderInfo
        component={QueryString}
        data={data}
        eventKey="queryString"
        supportEncode
      />
    )}
    {data.headers.postData && Object.keys(data.headers.postData).length > 0 && (
      <HeaderInfo
        component={FormData}
        data={data}
        eventKey="formData"
        supportEncode
      />
    )}
  </section>
));

Headers.propTypes = {
  data: PropTypes.object,
};

Headers.defaultProps = {
  data: null,
};

export default Headers;
