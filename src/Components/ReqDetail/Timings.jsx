import React from 'react';
import PropTypes from 'prop-types';

import TimeChartTooltip from './../NetworkTable/TimeChartTooltip';
import Styles from './Timings.styles.scss';

const Timings = ({ data }) => {
  return (
    <TimeChartTooltip
      className={Styles['timings-content']}
      data={data.timings}
    />
  );
};

Timings.propTypes = {
  data: PropTypes.object,
};

Timings.defaultProps = {
  data: null,
};

export default Timings;
