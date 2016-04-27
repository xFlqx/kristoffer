import {default as React, Component} from 'react';

import DocumentTitle from 'react-document-title';
import {config} from 'config';

import './styles';

export default class Resume extends Component {
  render () {
    return (
      <DocumentTitle title={`Resume | ${config.siteTitle}`}>
        <div dangerouslySetInnerHTML={{ __html: require('./_static.html').body }}/>
      </DocumentTitle>
    );
  }
}

Resume.propTypes = {
  route: React.PropTypes.object
};
